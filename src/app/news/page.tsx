import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

const NEWS_QUERY = `*[
  _type == "year"
  && category->title == "news"
]{_id, title, image{asset->{url}}}`;

export default async function IndexPage() {
  try {
    const news = await sanityFetch<SanityDocument[]>({ query: NEWS_QUERY });
    console.log('News is here', news, news[0].image);
  } catch (error) {
    console.log('This is an error', error);
  }

  const news = await sanityFetch<SanityDocument[]>({ query: NEWS_QUERY });

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col py-32 px-6 md:p-24 md:mt-20 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-3">
        {news.map((ne) => (
          <div
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:opacity-90 transition-opacity duration-300"
            key={ne._id}
          >
            <Link href={`/news/${ne?.title}`}>
              {ne?.image?.asset?.url && (
                <img
                  src={ne.image.asset.url}
                  alt={ne.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
              <h2 className="text-xl font-semibold mt-4">{ne?.title}</h2>
              <p className="text-gray-500">{`News in ${ne?.title}`}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
