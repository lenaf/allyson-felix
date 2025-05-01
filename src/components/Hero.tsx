"use client"

import Section from "@/components/common/Section";
import background from "public/images/photography/background.jpg"
import tribecaWhite from "public/images/tribecaWhite.png"

import BackgroundImage from "./common/BackgroundImage";

import LinkAsButton from "./common/LinkAsButton";
import Image from "next/image"

export default function Hero() {
  return (

    <Section id='home' className='flex h-[75vh] flex-col justify-center items-center gap-4' >
      <BackgroundImage
        alt={''}
        src={background}
      />
      <Image height={800} alt='Tribeca' width={600} src={tribecaWhite} />


    </Section>

  );
}
