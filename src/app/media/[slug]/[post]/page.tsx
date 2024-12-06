import { type SanityDocument } from "next-sanity";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";


const POST_QUERY = `*[
    _type == "post" &&
    _id == $postId
  ][0]{...}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value.asset)?.url() || ''}
        alt={value.alt || 'Image'}
        className="rounded-xl mr-4"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    ),
    externalImage: ({ value }) => (
      <img
        src={value.url}
        alt={value.alt || 'External image'}
        className="rounded-xl mr-4"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="ml-4 list-disc">{children}</ul>,
    number: ({ children }) => <ol className="ml-4 list-decimal">{children}</ol>,
  },
  block: {
    h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
    normal: ({ children }) => <p className="my-4">{children}</p>,
  },
};

export default async function EventPage({
  params,
}: {
  params: { post: string };
}) {
  const postId = params.post;

  try {
    const post = await sanityFetch<SanityDocument>({
      query: POST_QUERY,
      params,
    });
    console.log("posts is here", post);
  } catch (error) {
    console.log("This is an error", error);
  }

  const post = await sanityFetch<SanityDocument>({
    query: POST_QUERY,
    params: { postId: postId },
  });

  const {
    title,
    createdAt,
    mainImage,
    video, // Assuming this field contains the full YouTube URL
  } = post;

  const eventDate = new Date(createdAt).toDateString();
  const youtubeVideoId = video ? getYouTubeVideoId(video) : null;

  return (
    <main className="container mx-auto grid gap-12 p-12 mt-12 md:mt-20">
      <div className="mb-4">
        <Link href="/media">← Back to media</Link>
      </div>
      <div className="grid items-top gap-12 sm:grid-cols-2">
        {youtubeVideoId ? (
          <div className="mx-auto aspect-video overflow-hidden rounded-xl sm:w-full">
            <iframe
              width="550"
              height="310"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title || "Event Video"}
              className="w-full h-full"
            ></iframe>
          </div>
        ) : (
          <Image
            src={urlFor(mainImage)?.width(550).height(310).url() || "https://via.placeholder.com/550x310"}
            alt={title || "Event"}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            width="550"
          />
        )}
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-4">
            {title ? (
              <h1 className="text-2xl font-bold tracking-tighter mb-8">
                {title}
              </h1>
            ) : null}
            <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
              <dd className="font-semibold">Author</dd>
              <dt>{post.author || 'Admin'}</dt>
            </dl>
            <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
              <dd className="font-semibold">Date</dd>
              <div>
                {eventDate && <dt>{eventDate}</dt>}
              </div>
            </dl>
            <dl className="grid gap-1 text-sm font-medium sm:gap-2 lg:text-base">
              <div>{post.headline}</div>
            </dl>
          </div>
        </div>
      </div>
      <div className="lg:max-w-screen-lg leading-relaxed space-y-6 mt-4">
        <PortableText value={post.body} components={components} />
      </div>
    </main>
  );
}
