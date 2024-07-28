import { Facebook } from '@/components/icons/Facebook'
import { Instagram } from '@/components/icons/Instagram'
import { Twitter } from '@/components/icons/Twitter'
import Image from "next/image";

export const Footer = () => {
  const socialIcons = [
    {
      href: '#!',
      icon: <Facebook />,
    },
    {
      href: '#!',
      icon: <Instagram />,
    },
    {
      href: '#!',
      icon: <Twitter />,
    },
  ];

  return (
    <footer>
      <div className='flex justify-center py-16' >
        <Image src='/img/logo.png' height={300} width={300} alt={'awwalzgambo'} className="cols-span-1 w-300 h-300" />
      </div>
      <div className="bg-black text-center text-white h-[100px]">
        <div className="container p-4 pb-0">
          <section className="flex justify-center">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                className="btn btn-primary btn-floating m-1 text-white" 
                href={social.href}
                role="button"
              >
                {social.icon}
              </a>
            ))}
          </section>
        </div>
        <div className="text-center p-3">
          &copy; {new Date().getFullYear()} &nbsp;
          <a className="" href="https://awwalzgambo.com/">
            awwalzgambo.com
          </a>
        </div>
      </div>
    </footer>
    
  );
};
