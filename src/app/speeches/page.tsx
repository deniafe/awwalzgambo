import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

const SPEECHES_QUERY = `*[
  _type == "year" && category->title == "speeches"
] {
  _id, title, image{asset->{url}}
}`;

export default async function IndexPage() {
  let speeches: SanityDocument[] = [];

  try {
    // Fetching speeches from Sanity
    speeches = await sanityFetch<SanityDocument[]>({ query: SPEECHES_QUERY });
    console.log("Speeches are here", speeches, speeches[0]?.image);
  } catch (error) {
    console.log("This is an error", error);
  }

  // Sorting speeches to ensure the latest speech appears first
  speeches.sort((a, b) => Number(b.title) - Number(a.title));

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col py-32 px-6 md:p-24 md:mt-20 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">Speeches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-3">
        {speeches.map((speech) => (
          <div
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:opacity-90 transition-opacity duration-300"
            key={speech._id}
          >
            <Link href={`/speeches/${speech?.title}`}>
              {speech?.image?.asset?.url && (
                <img
                  src={speech.image.asset.url}
                  alt={speech.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
              <h2 className="text-xl font-semibold mt-4">{speech?.title}</h2>
              <p className="text-gray-500">{`Speeches in ${speech?.title}`}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
