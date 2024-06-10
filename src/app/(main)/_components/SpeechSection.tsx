// components/About.tsx
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image"

export const Speech = () => {
    return (
      <section className="relative flex items-center justify-center py-[4rem] md:h-screen">
        <div className="max-w-4xl">
          <DotPattern
              className={cn(
              "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
              )}
          />
            <h2 className="text-3xl md:text-5xl text-center text-gray-300 font-bold mb-12">SPEECH</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-8 space-y-8">
            <div className="p-4 border-t border-r border-solid border-black ">
                <Image src='/img/speech.Jpeg' height={500} width={500} alt={'awwalzgambo'} className="cols-span-1 w-full h-full" />
            </div>
            <div className="col-span-1 px-4 md:px-0">
              <p className="mb-4 text-center">Vice Admiral Awwal Zubairu Gambo was born on 22 April 1966 in Nasarawa Local Government Area of Kano State. Vice Admiral Gambo attended Gwagwarwa Special Primary School, Kano where he obtained his First Primary School Leaving Certificate. Thereafter, he proceeded to Rumfa College, Kano where he got his West African School Certificate in 1984.</p>
              <p className="mb-4 text-center">He enlisted into the Nigerian Defence Academy as a member of 36 Regular Course on 24 September 1984 and was commissioned Sub-Lieutenant on 24 October 1989.</p>
            </div>
            </div>
            
        </div>
      </section>
    );
  }
  