"use client";

import Section from "@/components/common/Section";
import background from "public/images/medals_9:16.jpg";

import BackgroundImage from "./common/BackgroundImage";
import Image from "next/image";
import { urlFor } from "@/data/image";

export default function Hero({
  laurels,
}: {
  laurels: { image: any; title: string }[];
}) {
  const use2ColsOnEachSideForDesktop = laurels.length > 8;
  const firstHalfLaurels = laurels.slice(0, Math.ceil(laurels.length / 2));
  const secondHalfLaurels = laurels.slice(Math.ceil(laurels.length / 2));

  return (
    <Section
      id="home"
      className="flex h-[80vw] md:h-[60vw] lg:h-[50vw] xl:h-[40vw] flex-col justify-top items-left gap-4"
    >
      <BackgroundImage
        alt={"Allyson Felix wearing her olympic medals"}
        src={background}
      />
      <div className="p-4 md:p-8 relative">
        <div className="flex justify-between">
          {[firstHalfLaurels, secondHalfLaurels].map((laurelsSet, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 gap-1 sm:gap-2 md:gap-4 lg:gap-6 items-center ${use2ColsOnEachSideForDesktop ? "md:grid-cols-2" : ""} `}
            >
              {laurelsSet.map((l, j) => (
                <Image
                  key={`${i}-${j}`}
                  alt={l.title}
                  src={urlFor(l.image)
                    .width(200)
                    .quality(80)
                    .auto("format")
                    .url()}
                  width={200}
                  height={200}
                  className={`w-12 h-auto sm:w-24 md:w-32 lg:w-36`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
