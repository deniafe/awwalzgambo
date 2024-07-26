import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

const SPEECHES_POST_QUERY = `*[
  _type == "post"
  && category->title == "speech"
  && year->title == $year
  && month->title == $month
]{_id, title, publishedAt}`;

export default async function IndexPage({
  params,
}: {
  params: { slug: string; month: string };
}) {
  const { slug, month } = params;
  console.log("The slugs", slug);

  try {
    const speeches_posts = await sanityFetch<SanityDocument[]>({
      query: SPEECHES_POST_QUERY,
      params: { year: slug },
    });
    console.log("Speeches is here", speeches_posts);
  } catch (error) {
    console.log("This is an error", error);
  }

  const speeches_posts = await sanityFetch<SanityDocument[]>({
    query: SPEECHES_POST_QUERY,
    params: { year: slug, month: month },
  });

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col py-32 px-6 md:p-24 md:mt-20 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">
        Speeches Archive {month} {slug}
      </h1>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {speeches_posts.map((post) => {
          const formattedDate = new Date(post.publishedAt).toLocaleDateString(
            "en-US",
            { year: "numeric", month: "long", day: "numeric" }
          );

          return (
            <div
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:opacity-90 transition-opacity duration-300"
              key={post._id}
            >
              <Link href={`/speeches/${slug}/${month}/${post?._id}`}>
                <h2 className="text-xl font-semibold my-4">{post?.title}</h2>
                <p className="text-gray-600 font-semibold text-xs">{formattedDate}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
