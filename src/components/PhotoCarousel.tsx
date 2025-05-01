"use client"

import Section from "@/components/common/Section";
import background from "public/images/photography/background.jpg"
import BackgroundImage from "./common/BackgroundImage";
import LinkAsButton from "./common/LinkAsButton";
import { Carousel } from "./common/Carousel";

export default function PhotoCarousel() {
  return (

    <Section id='photos' className='relative h-[50vh] '>
      <Carousel id='photos' >

      </Carousel>

    </Section >

  );
}
