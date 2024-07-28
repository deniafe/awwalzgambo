import SearchBox from "@/components/SearchBox";

const SEARCH_QUERY = `*[
    _type == "post"
    && title == $searchTerm
  ]{_id, title, image}`;

export default async function IndexPage() {

    return (
        <main className="flex bg-gray-100 min-h-screen flex-col py-32 px-6 md:p-24 md:mt-20 gap-12">
            <SearchBox />
        </main>
    );
}
