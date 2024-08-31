'use client'
import { LoaderIcon, Search } from 'lucide-react';
import { useState } from 'react';
import { SanityDocument } from "next-sanity";
import { handleSearch } from '@/app/actions/search';
import Link from 'next/link';
import { capitalizeFirstLetter } from '@/lib/utils';

export default function SearchBox() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchItems, setSearchItems] = useState<SanityDocument[]>([]);

  const handleSearchTerm = async () => {
    console.log('Searching for:', searchTerm);
    setSearchItems([]);
    setLoading(true);
    const result = await handleSearch(searchTerm);
    
    // Sort the result by createdAt in descending order
    const sortedResult = result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    setSearchItems(sortedResult);
    setLoading(false);
  };

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      await handleSearchTerm();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-transparent transition duration-300"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          type='button'
          onClick={handleSearchTerm}
          className="absolute inset-y-0 right-0 flex items-center pr-4"
        >
          <Search />
        </button>
      </div>
      {loading && <div className="mt-20 flex justify-center">
       <LoaderIcon />
      </div>}
      <div className="mt-16 w-full max-w-md">
        {searchItems.length > 0 && (
          <ul className="space-y-4">
            {searchItems.map((post) => {
              const formattedDate = new Date(post.createdAt).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              );

              return (
                <div
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:opacity-90 transition-opacity duration-300"
                  key={post._id}
                >
                  <Link href={`/${post.category.title}/${post.year.title}/${post?._id}`}>
                    <h2 className="text-xl font-semibold my-4">{post?.title}</h2>
                    <p className="text-gray-600 font-semibold text-xs">{capitalizeFirstLetter(post.category.title)} - {formattedDate}</p>
                  </Link>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
