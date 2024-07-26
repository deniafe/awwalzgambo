import DotPattern from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MicVocal, Users, Newspaper, Video, ChevronRight } from "lucide-react";
import Link from "next/link";

const cardData = [
  {
    title: "SPEECHES",
    icon: MicVocal,
    description: "He enlisted into the Nigerian Defence Academy as a member of 36 Regular Course.",
    href: "/speeches",
  },
  {
    title: "ABOUT",
    icon: Users,
    description: "He enlisted into the Nigerian Defence Academy as a member of 36 Regular Course.",
    href: "/about",
  },
  {
    title: "NEWS",
    icon: Newspaper,
    description: "He enlisted into the Nigerian Defence Academy as a member of 36 Regular Course.",
    href: "/news",
  },
  {
    title: "MEDIA",
    icon: Video,
    description: "He enlisted into the Nigerian Defence Academy as a member of 36 Regular Course.",
    href: "/media",
  },
];

export const SeeMoreSection = () => {
  return (
    <section className="flex items-center justify-center pb-[2rem] pt-[4rem]">
      <div className="grid gap-2 md:grid-cols-2 md:gap-8 lg:grid-cols-4 max-w-4xl">
        {cardData.map((item, index) => (
          <Link href={item.href} key={index} passHref>
            <Card className="rounded" x-chunk={`dashboard-01-chunk-${index}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                <item.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button size={'sm'} className="w-full">
                    Explore
                    <ChevronRight size={16} className="ml-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
