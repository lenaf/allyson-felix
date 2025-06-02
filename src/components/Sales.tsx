"use client"

import { SectionHeader } from "./common/SectionHeader";
import Section from "./common/Section";

export default function Sales() {
  return (

    <Section id='sales' className="prose px-4 sm:px-8 md:px-12 py-12" >
      <div >
        <SectionHeader>WORLDWIDE SALES</SectionHeader>
        <div className="text-white text-xl mb-2">The Film Sales Company </div>
        <div className="">Andrew Herwitz, President </div>
      </div>
    </Section>

  );
}
