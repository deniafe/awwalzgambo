import { Facebook } from '@/components/icons/Facebook'
import { Instagram } from '@/components/icons/Instagram'
import { Twitter } from '@/components/icons/Twitter'
import { Menu } from '@/components/icons/menu'
import { ChevronLeft } from 'lucide-react'
import React from 'react'

export const Sidebar = () => {

  const socialIcons = [
    {
      href: '#!',
      icon: <Facebook />,
    },
    {
      href: 'https://www.instagram.com/awwalzgambo',
      icon: <Instagram />,
    },
    {
      href: '#!',
      icon: <Twitter />,
    },
  ];

  return (
    <div className='hidden md:block fixed h-screen top-0 left-0 z-100'>
        <div className="h-full relative w-[60px] border-r border-solid border-black flex flex-col">
        <div className="flex justify-center pt-4">
            <Menu />
        </div>
        <div className="flex-1 flex flex-col justify-center">
            {/* <div className="my-4 flex justify-center">
            <Facebook /> 
            </div>
            <div className="my-4 flex justify-center">
            <Instagram />
            </div>
            <div className="my-4 flex justify-center">
            <Twitter />
            </div> */}
            {socialIcons.map((social, index) => (
              <a
                key={index}
                className="my-4 flex justify-center" 
                href={social.href}
                role="button"
              >
                {social.icon}
              </a>
            ))}
        </div>
        <div className="absolute bottom-0 w-full h-[100px] bg-black flex justify-center items-center">
            <ChevronLeft className="text-white" />
        </div>
        </div>

    </div>
  )
}
