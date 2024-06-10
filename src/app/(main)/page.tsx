import React from 'react'
import { HeroSection } from './_components/HeroSection'
import { About } from './_components/AboutSection'
import { Speech } from './_components/SpeechSection'
import { CarouselPlugin } from './_components/HeroSection/Carousel'
import { NewsSection } from './_components/NewsSection'
import { SeeMoreSection } from './_components/SeeMoreSection'

export default function Page() {
  return (
    <>
        <HeroSection />
        <About />
        <Speech />
        <NewsSection />
        <SeeMoreSection />
    </>
  )
}
