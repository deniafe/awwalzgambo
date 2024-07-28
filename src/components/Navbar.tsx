'use client'

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  href: string,
  children: React.ReactNode;
  className?: string; // Optional className prop to apply conditional classes
}

const NavItem = ({ href, children, className }: Props) => (
  <Link href={href} className={`text-foreground transition-colors hover:text-black ${className}`}>
    {children}
  </Link>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { href: '/', label: 'Home', hideOnMobile: true },
    { href: '/about', label: 'About', hideOnMobile: false },
    { href: '/speeches', label: 'Speeches', hideOnMobile: false },
    { href: '/news', label: 'News', hideOnMobile: false },
    { href: '/media', label: 'Media', hideOnMobile: false },
  ];

  return (
    <nav className={`fixed z-20 top-0 flex justify-center h-[70px] w-full transition-colors duration-300 ${scrolled ? 'bg-gray-100' : 'bg-transparent'}`}>
      <div className="w-full px-[1rem] md:px-0 md:w-5/6 flex justify-between">
        <Link href={'/'} className="flex items-center">
          <Image src={'/img/favicon.png'} height={40} width={40} alt={'awwalzgambo'} />
        </Link>

        <div className="flex items-center text-xs sm:text-sm space-x-2 md:space-x-4">
          {navItems.map((item) => (
            <NavItem 
              key={item.label} 
              href={item.href} 
              className={item.hideOnMobile ? 'hidden md:block' : ''}
            >
              {item.label}
            </NavItem>
          ))}
        </div>
        <div className="flex justify-center items-center text-black">
        <Link href={'/search'} className="flex items-center">
          <Search />
        </Link>
        </div>
      </div>
    </nav>
  );
};
