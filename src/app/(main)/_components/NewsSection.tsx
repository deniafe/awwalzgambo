'use client'

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

export function NewsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const newsItems = [
    { id: 1, imageUrl: "/img/1.jpeg", title: `He enlisted into the Nigerian Defence Academy as a member of 36 Regular Course on 24 September 1984 and was commissioned Sub-Lieutenant on 24 October 1989.` },
    { id: 2, imageUrl: "/img/2.jpeg", title: `He enlisted into the Nigerian Defence Academy as a member of 36 Regular Course on 24 September 1984 and was commissioned Sub-Lieutenant on 24 October 1989.` },
    { id: 3, imageUrl: "/img/3.jpeg", title: `He enlisted into the Nigerian Defence Academy as a member of 36 Regular Course on 24 September 1984 and was commissioned Sub-Lieutenant on 24 October 1989.` },
    { id: 4, imageUrl: "/img/4.jpeg", title: `He enlisted into the Nigerian Defence Academy as a member of 36 Regular Course on 24 September 1984 and was commissioned Sub-Lieutenant on 24 October 1989.` },
  ];

  return (
    <div className="relative z-2 bg-gray-100 w-full mb-[4rem] flex flex-col items-center md:min-h-screen">
       <h2 className="text-3xl md:text-5xl text-gray-300 font-bold mb-12 mt-24">LATEST NEWS</h2>
      <Carousel
        plugins={[plugin.current]}
        className="relative overflow-hidden w-full md:max-w-4xl h-[32rem]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex">
          {newsItems.map((item) => (
            <CarouselItem key={item.id} className="relative">
              <Card className="relative transition-transform transform hover:scale-105 min-h-96">
                <CardContent className="relative grid grid-cols-1 md:grid-cols-2 md:space-x-4 p-0">
                  <div className="flex items-center col-span-1 justify-center text-center px-2 py-8 md:px-4">
                    {item.title}
                  </div>
                  <div className="col-span-1 w-full flex justify-center h-full bg-slate-400">
                    <Image 
                      src={item.imageUrl}
                      alt={item.title}
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </CarouselNext>
      </Carousel>
    </div>
  );
}
