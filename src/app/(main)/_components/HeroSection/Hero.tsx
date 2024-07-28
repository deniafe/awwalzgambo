'use client'

import DotPattern from "@/components/magicui/dot-pattern"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export const Hero = () => {
  return (
    <div className="relative flex w-full h-full">
        <div className="hidden fixed bottom-0 left-[60px] w-[60px] h-[100px] bg-orange-200 md:flex justify-center items-center">
            <ChevronRight className="text-brown" />
        </div>
       
        <div className="grid grid-cols-6 md:grid-cols-4 lg:grid-cols-3 w-full absolute top-0 pt-[8rems] h-full">
            <div className="h-full w-full relative col-span-1 flex justify-end md:justify-center items-center">
                <div className="flex absolute bottom-0 left-0 w-full h-[100px] bg-black md:hidden justify-center items-center">
                    <ChevronRight className="text-white" />
                </div>
                <h1 className="hidden lg:block text-black text-6xl font-bold">Awwal Z <br /> Gambo</h1>
                {/* <h1 className="lg:hidden text-black text-4xl md:text-5xl font-bold vertical-text">
                 Awwal Z Gambo
                </h1> */}

                <div className="lg:hidden text-[0.5rem] md:text-sm vertical-text">
                    <h3 className="text-black">21ST INDIGENOUS
                    <span className="text-orange-300 font-medium">CHIEF OF THE NAVAL STAFF,</span>
                    </h3>
                    <h3 className="">NIGERIAN NAVY
                    <span className="text-[0.25rem] md:text-xs"> 2021 - 2023</span>
                    </h3>
                </div>

            </div>
            <div className="relative h-full col-span-4 md:col-span-2 lg:col-span-1 bg-orange-200">
                <div className="relative h-1/2 w-full">
                    <DotPattern
                        className={cn(
                        "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",'lg:hidden'
                        )}
                    />
                </div>
                 
                {/* <div className="lg:hidden absolute bottom-0 flex justify-center h-4/5 w-full">
                     <Image src={'/img/main-hero.png'} height={350} width={350} alt={'awwalzgambo'} className="lg:hidden" />
                </div> */}

                <div className="hidden lg:flex absolute left-[-2.5rem] pt-10 bottom-0 w-full max-h-[99vh]">
                    <Image src={'/img/main-hero.png'} height={500} width={500} alt={'awwalzgambo'} className="hidden lg:block" />
                </div>
            </div>
            <div className="h-full col-span-1 relative">
                <DotPattern
                    className={cn(
                    "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
                    )}
                />
                <div className="hidden lg:block absolute h-20 w-40 border-black border-r-4 border-t-4 border-solid left-0 top-20"></div>
                <div className="hidden lg:flex justify center absolute h-60 w-80 border-orange-200 border-x-4 border-t-4 border-solid left-10 top-40">
                <DotPattern
                    className={cn(
                    "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]", 'lg:hidden'
                    )}
                />
                </div>
                <div className="hidden lg:block absolute bottom-10 left-5">
                    <h3 className="text-black text-l">21ST INDIGENOUS</h3>
                    <h3 className="text-orange-400 text-l font-medium">CHIEF OF THE NAVAL STAFF,</h3>
                    <h3 className="text-l">NIGERIAN NAVY</h3>
                    <p className="">2021 - 2023</p>
                </div>
            </div>
        </div>
        {/* <div className="md:hidden absolute top-20 left-2">
            <img src={'/img/main-hero1.png'} alt={'awwalzgambo'} className="h-[28rem] w-[28rem]" />
        </div> */}
        <div className="z-10 lg:hidden w-screen h-1/3 flex items-center justify-center">
            <div>
                <h1 className="lg:hidden text-black text-4xl md:text-5xl font-bold">
                    Awwal Z Gambo
                </h1>

                <div className="lg:hidden text-sm md:text-normal text-center">
                    <h3 className="text-black">VICE ADMIRAL (RTD), CFR</h3>
                    {/* <p className="font-medium"> CHIEF OF NAVAL STAFF</p> */}
                </div>
            </div>  
        </div>    

        <div className="lg:hidden absolute bottom-0 flex justify-center w-full">
            <Image src={'/img/main-hero.png'} height={350} width={350} alt={'awwalzgambo'} className="lg:hidden" />
        </div>

    </div>
  )
}
