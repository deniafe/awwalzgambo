import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

const MEDIA_MONTH_QUERY = `*[
  _type == "month"
  && category->title == "media"
  && year->title == $year
]{_id, title, image{asset->{url}}}`;

const MONTH_ORDER = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default async function IndexPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  let media_months: SanityDocument[] = [];

  try {
    media_months = await sanityFetch<SanityDocument[]>({
      query: MEDIA_MONTH_QUERY,
      params: { year: slug },
    });
    console.log('Media items are here', media_months, media_months[0]?.image);
  } catch (error) {
    console.log('This is an error', error);
  }

  // Sort media_months by month order
  media_months.sort((a, b) => {
    const monthA = a.title;
    const monthB = b.title;
    return MONTH_ORDER.indexOf(monthA) - MONTH_ORDER.indexOf(monthB);
  });

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col py-32 px-6 md:p-24 md:mt-20 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">Media Archive {slug}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-3">
        {media_months.map((month) => (
          <div
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:opacity-90 transition-opacity duration-300"
            key={month._id}
          >
            <Link href={`/media/${slug}/${month?.title}`}>
              {month?.image?.asset?.url && (
                <img
                  src={month.image.asset.url}
                  alt={month.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
              <h2 className="text-xl font-semibold mt-4">{month?.title}</h2>
              <p className="text-gray-500">{`Media in ${month?.title}`}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
