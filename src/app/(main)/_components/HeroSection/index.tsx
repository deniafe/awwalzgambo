// components/Hero.tsx
'use client'

import { Hero } from './Hero';
import { Navbar } from '../../../../components/Navbar';
import { Sidebar } from './Sidebar';

export const HeroSection = () => {
  return (
    <section className="h-screen">
        <Navbar />
        <Sidebar />
        <Hero />
    </section>
  );
};
