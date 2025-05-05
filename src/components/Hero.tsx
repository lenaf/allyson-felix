"use client"

import Section from "@/components/common/Section";
import background from "public/images/medals_9:16.jpg"
import laurel from "public/images/laurel.png"

import BackgroundImage from "./common/BackgroundImage";

import Image from "next/image"

export default function Hero() {
  return (

    <Section id='home' className='flex h-[100vw] md:h-[56.25vw] lg:h-[50vw] xl:h-[45vw] flex-col justify-top items-left gap-4' >
      <BackgroundImage
        alt={'Allyson Felix wearing her olympic medals'}
        src={background}
      />
      <Image
        alt={'Tribeca Festival Official Selection'}
        src={laurel}
        width={200}
        className={`absolute top-5 left-5 w-20 md:top-10 md:left-10 md:w-36`}
      />
    </Section>

  );
} 
