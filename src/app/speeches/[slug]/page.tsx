import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

const SPEECHES_MONTH_QUERY = `*[
  _type == "month"
  && category->title == "speech"
  && year->title == $year
]{_id, title, image{asset->{url}}}`;

export default async function IndexPage({
  params,
}: {
  params: { slug: string };
})  {
  const { slug } = params;

  try {
    const speeches_months = await sanityFetch<SanityDocument[]>({
      query: SPEECHES_MONTH_QUERY,
      params: { year: slug },
    });
    console.log('Speeches is here', speeches_months, speeches_months[0]?.image);
  } catch (error) {
    console.log('This is an error', error);
  }

  const speeches_months = await sanityFetch<SanityDocument[]>({
    query: SPEECHES_MONTH_QUERY,
    params: { year: slug },
  });

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col py-32 px-6 md:p-24 md:mt-20 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">Speeches Archive {slug}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-3">
        {speeches_months.map((month) => (
          <div
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:opacity-90 transition-opacity duration-300"
            key={month._id}
          >
            <Link href={`/speeches/${slug}/${month?.title}`}>
              {month?.image?.asset?.url && (
                <img
                  src={month.image.asset.url}
                  alt={month.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
              <h2 className="text-xl font-semibold mt-4">{month?.title}</h2>
              <p className="text-gray-500">{`Speeches in ${month?.title}`}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
