import { Footer } from "./_components/HeroSection/Footer";
import { Navbar } from "./_components/HeroSection/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <Navbar />
          {children}
        <Footer />
      </div>
  );
}
