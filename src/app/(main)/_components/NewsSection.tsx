'use client';

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";// Use the refactored client import
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Define the type for the posts prop
interface Post {
  _id: string;
  title: string;
  headline: string;
  mainImage?: { asset: { url: string } }; // Make mainImage optional
}

interface NewsSectionProps {
  posts: Post[];
}

export function NewsSection({ posts }: NewsSectionProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) => {
    if (projectId && dataset) {
      const builder = imageUrlBuilder({ projectId, dataset });
      return builder.image(source).url();
    }
    return ""; // Return an empty string if projectId or dataset is missing
  };

  return (
    <div className="relative z-2 bg-gray-100 w-full mb-[4rem] flex flex-col items-center md:min-h-screen">
      <h2 className="text-3xl md:text-5xl text-gray-400 font-bold mb-12 mt-24">
        LATEST NEWS
      </h2>
      <Carousel
        plugins={[plugin.current]}
        className="relative overflow-hidden w-full md:max-w-4xl h-[32rem]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex">
          {posts.map((post) => (
            <CarouselItem key={post._id} className="relative">
              <Card className="relative transition-transform transform hover:scale-105 min-h-96">
                <CardContent className="relative grid grid-cols-1 md:grid-cols-2 md:space-x-4 p-0">
                  <div className="flex flex-col text-center justify-center items-center px-4 md:px-8">
                    <h3 className="text-lg text-gray-800 font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-500 mt-6">{post.headline}</p>
                  </div>
                  <div className="col-span-1 w-full flex justify-center h-full bg-slate-400">
                    <Image
                      src={post.mainImage ? urlFor(post.mainImage) : "/img/placeholder.png"}
                      alt={post.title}
                      width={500}
                      height={500}
                      objectFit="cover"
                      className="object-cover w-full h-96"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-25 text-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-25 text-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </CarouselNext>
      </Carousel>
    </div>
  );
}
