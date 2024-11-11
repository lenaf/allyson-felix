"use client"

import LinkAsButton from "@/components/common/LinkAsButton";
import Image from "next/image"
import background from "public/images/photography/background.jpg"

export default function Home() {
  return (
    <div className="flex flex-col items-center">

      <section id='home-hero' className="animate-fade">
        <Image
          src={background}
          alt="hero"
          className="desktop object-cover object-top"
        />
        <Image
          src={background}
          alt="hero"
          fill
          className="mobile object-cover object-top"
        />
        {/* <div className="prose absolute left-16 sm:left-24 top-1/2 -translate-y-1/2 transform">
          <LinkAsButton href="/about">Learn More</LinkAsButton>
        </div> */}
      </section>
    </div>
  );
}
