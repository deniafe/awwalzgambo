'use client'

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  href: string,
  children: React.ReactNode;
}

const NavItem = ({ href, children }: Props) => (
  <Link href={href} className="text-foreground transition-colors hover:text-black">
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
    { href: '#', label: 'Home' },
    { href: '#', label: 'About' },
    { href: '#', label: 'Speeches' },
    { href: '#', label: 'News' },
    { href: '#', label: 'Media' },
  ];

  return (
    <nav className={`fixed z-20 top-0 flex justify-center h-[70px] w-full transition-colors duration-300 ${scrolled ? 'bg-gray-100' : 'bg-transparent'}`}>
      <div className="w-full px-[1rem] md:px-0 md:w-5/6 flex justify-between">
        <div className="flex items-center">
          <Image src={'/img/favicon2.jpeg'} height={40} width={40} alt={'awwalzgambo'} />
        </div>

        <div className="flex items-center text-xs sm:text-sm space-x-2 md:space-x-4">
          {navItems.map((item) => (
            <NavItem key={item.label} href={item.href}>
              {item.label}
            </NavItem>
          ))}
        </div>
        <div className="flex justify-center items-center text-black">
          <Search />
        </div>
      </div>
    </nav>
  );
};
