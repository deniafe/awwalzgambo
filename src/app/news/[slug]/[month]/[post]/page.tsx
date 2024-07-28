import { PortableText, type SanityDocument } from "next-sanity";
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

export default async function EventPage({
  params,
}: {
  params: { post: string };
}) {

    const postId = params.post

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
    params: {postId: postId},
  });

  const {
    title,
    publishedAt,
    mainImage,
  } = post;

  const eventImageUrl = mainImage
    ? urlFor(mainImage)?.width(550).height(310).url()
    : null;
  const eventDate = new Date(publishedAt).toDateString();
//   const eventTime = new Date(publishedAt).toLocaleTimeString();

  return (
    <main className="container mx-auto grid gap-12 p-12 mt-12 md:mt-20">
      <div className="mb-4">
        <Link href="/news">← Back to news</Link>
      </div>
      <div className="grid items-top gap-12 sm:grid-cols-2">
        <Image
          src={eventImageUrl || "https://via.placeholder.com/550x310"}
          alt={title || "Event"}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="310"
          width="550"
        />
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
              <dd className="font-semibold">Published At</dd>
              <div>
                {eventDate && <dt>{eventDate}</dt>}
                {/* {eventTime && <dt>{eventTime}</dt>} */}
              </div>
            </dl>
              <dl className="grid gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                {/* <dd className="font-semibold">Headline</dd>
                <div className="grid gap-1">
                </div> */}
                <div>{post.headline}</div>
              </dl>
           
          </div>
        </div>
      </div>
      <div className="lg:max-w-screen-lg leading-relaxed space-y-6 mt-4">
        <PortableText value={post.body} />
      </div>
    </main>
  );
}