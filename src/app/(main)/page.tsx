import React from 'react'
import { HeroSection } from './_components/HeroSection'
import { About } from './_components/AboutSection'
import { Speech } from './_components/SpeechSection'
import { CarouselPlugin } from './_components/HeroSection/Carousel'
import { NewsSection } from './_components/NewsSection'
import { SeeMoreSection } from './_components/SeeMoreSection'

import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

// Adjusted query to fetch the first 3 posts in the "news" category, sorted by published date.
const NEWS_POST_QUERY = `*[
  _type == "post" 
  && category->title == "news"
] | order(publishedAt desc) [0...3] {
  _id,
  title,
  headline,
  mainImage,
  publishedAt
}`;

export default async function Page() {

  // Fetch the first 3 news posts
  let posts: any[] = [];
  try {
    posts = await sanityFetch<SanityDocument[]>({
      query: NEWS_POST_QUERY,
    });
    console.log("Posts fetched:", posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <>
        <HeroSection />
        <About />
        <Speech />
        <NewsSection posts={posts} />
        <SeeMoreSection />
    </>
  )
}
