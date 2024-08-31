import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

// Adjusted query to fetch posts in the "news" category
const NEWS_POST_QUERY = `*[
  _type == "post"
  && category->title == "news"
  && year->title == $year
]{_id, title, createdAt}`;

export default async function IndexPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  console.log("The slugs", slug);

  let news_posts: SanityDocument[] = [];

  try { 
    // Fetch news posts from Sanity
    news_posts = await sanityFetch<SanityDocument[]>({
      query: NEWS_POST_QUERY,
      params: { year: slug },
    });
    console.log("News posts are here", news_posts);
  } catch (error) {
    console.log("This is an error", error);
  }

  // Sort news posts by createdAt in descending order (latest first)
  news_posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col py-32 px-6 md:p-24 md:mt-20 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">
        News Archive {slug}
      </h1>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {news_posts.map((post) => {
          const formattedDate = new Date(post.createdAt).toLocaleDateString(
            "en-US",
            { year: "numeric", month: "long", day: "numeric" }
          );

          return (
            <div
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:opacity-90 transition-opacity duration-300"
              key={post._id}
            >
              <Link href={`/news/${slug}/${post?._id}`}>
                <h2 className="text-xl font-semibold my-4">{post?.title}</h2>
                <p className="text-gray-600 font-semibold text-xs">
                  {formattedDate}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
