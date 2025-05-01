"use client"

import Section from "@/components/common/Section";
import background from "public/images/She Runs the World-Bug-16x9-01.png"
import backgroundMobile from "public/images/She Runs the World-Bug-1x1-01.png"

import tribecaWhite from "public/images/tribecaWhite.png"

import BackgroundImage from "./common/BackgroundImage";

import LinkAsButton from "./common/LinkAsButton";
import Image from "next/image"

export default function Hero() {
  return (

    <Section id='home' className='flex h-[100vw] md:h-[56.25vw] flex-col justify-top items-left gap-4' >
      <BackgroundImage
        alt={''}
        src={background}
        srcMobile={backgroundMobile}
      />
    </Section>

  );
} 
