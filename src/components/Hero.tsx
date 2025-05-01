"use client"

import Section from "@/components/common/Section";
import background from "public/images/photography/background.jpg"
import BackgroundImage from "./common/BackgroundImage";
import LinkAsButton from "./common/LinkAsButton";

export default function Hero() {
  return (

    <Section id='home' className='relative flex h-[75vh] flex-col justify-end items-center gap-4' >
      <BackgroundImage
        alt={''}
        src={background}
      />
      <div className="relative p-20 flex gap-4 flex-wrap">
        <div className="bg-base-100/50 p-4">
          <div className="font-black text-primary text-3xl "><div>WORLD PREMIER</div> </div>
          <div className="text-lg">
            <div className="">Thursday, June 5th 2025 <span>8:30pm</span> </div>
            <div className="text-gray-300">SVA’s Silas Theatre </div>
          </div>
          <LinkAsButton className="btn-base-100 rounded-full h-6 min-h-6 gap-2" href="https://tribecafilm.com/films/she-runs-the-world-2025" target="_blank">
            <span className="=">Tickets</span>
            <span aria-hidden="true">&rarr;</span>
          </LinkAsButton>
        </div>

        <div className="bg-base-100/50 p-4">
          <div className="font-black text-primary text-xl ">MORE SCREENINGS </div>
          <div className="text-xs">
            <div className="">Sat, June 7th 2025 <span>3:15pm</span> </div>
            <div className="">Sat, June 8th 2025 <span>6:15pm</span> </div>
            <div className="">Sat, June 14th 2025 <span>12:15</span> </div>

            <div className="text-gray-300">Village East Cinema </div>
          </div>
          <LinkAsButton className="btn-base-100 rounded-full h-6 min-h-6 gap-2" href="https://tribecafilm.com/films/she-runs-the-world-2025" target="_blank">
            <span className="=">Tickets</span>
            <span aria-hidden="true">&rarr;</span>
          </LinkAsButton>
        </div>
      </div>

    </Section>

  );
}
