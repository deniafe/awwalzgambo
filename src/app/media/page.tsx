import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

const MEDIA_QUERY = `*[
  _type == "year"
  && category->title == "media"
]{_id, title, image{asset->{url}}}`;

export default async function IndexPage() {
  let mediaItems: SanityDocument[] = [];

  try {
    // Fetch media items from Sanity
    mediaItems = await sanityFetch<SanityDocument[]>({ query: MEDIA_QUERY });
    console.log("Media items are here", mediaItems, mediaItems[0]?.image);
  } catch (error) {
    console.log("This is an error", error);
  }

  // Convert the title to a number and sort the mediaItems array in descending order
  mediaItems.sort((a, b) => Number(b.title) - Number(a.title));

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col py-32 px-6 md:p-24 md:mt-20 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">Media</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-3">
        {mediaItems.map((media) => (
          <div
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:opacity-90 transition-opacity duration-300"
            key={media._id}
          >
            <Link href={`/media/${media?.title}`}>
              {media?.image?.asset?.url && (
                <img
                  src={media.image.asset.url}
                  alt={media.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
              <h2 className="text-xl font-semibold mt-4">{media?.title}</h2>
              <p className="text-gray-500">{`Media in ${media?.title}`}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
