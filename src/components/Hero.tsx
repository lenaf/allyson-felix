"use client"

import Section from "@/components/common/Section";
import background from "public/images/medals_9:16.jpg"
import BackgroundImage from "./common/BackgroundImage";

export default function Hero() {
  return (

    <Section id='home' className='flex h-[100vw] md:h-[56.25vw] lg:h-[50vw] xl:h-[45vw] flex-col justify-top items-left gap-4' >
      <BackgroundImage
        alt={'Allyson Felix wearing her olympic medals'}
        src={background}
      />
    </Section>

  );
} 
