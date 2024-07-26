import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    default: 'Vice Admiral Awwal Z Gambo',
    template: `%s | Vice Admiral Awwal Z Gambo`
  },
  description: `OFFICE OF THE FORMER CHIEF OF NAVAL STAFF OF THE FEDERAL REPUBLIC OF NIGERIA 2021 - 2023`, 
  icons: [
    {
      url: '/img/favicon.png',
      href: '/img/favicon.png'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
