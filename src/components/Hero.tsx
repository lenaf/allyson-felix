"use client"

import Section from "@/components/common/Section";
import background from "public/images/photography/background.jpg"
import BackgroundImage from "./common/BackgroundImage";

export default function Hero() {
  return (

    <Section id='home' className='relative flex h-[75vh]' >
      <BackgroundImage
        alt={''}
        src={background}
      />
    </Section>

  );
}
