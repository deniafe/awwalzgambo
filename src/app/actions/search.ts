"use server";

import { sanityFetch } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

const SEARCH_QUERY = `*[
    _type == "post"
    && title match $searchTerm
  ]{_id, title, publishedAt, category->{title}, mainImage, year->{title}, month->{title}}`;

export async function handleSearch(searchTerm: string): Promise<SanityDocument[]> {
  try {
    const searchItems = await sanityFetch<SanityDocument[]>({
      query: SEARCH_QUERY,
      params: { searchTerm: `${searchTerm}*` },
    });
    return searchItems;
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
}
