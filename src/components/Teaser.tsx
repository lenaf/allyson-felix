"use client";

import { SectionHeader } from "./common/SectionHeader";
import Section from "./common/Section";

export default function Teaser() {
  return (
    <Section id="teaser" className="prose px-4 sm:px-8 md:px-12 py-12">
      <SectionHeader>Teaser</SectionHeader>
      <video
        className="w-[60vw] aspect-video mx-auto"
        controls
        preload="metadata"
        poster="/trailer-image.png"
      >
        <source src="/trailer.mp4" type="video/mp4" />
      </video>
    </Section>
  );
}
