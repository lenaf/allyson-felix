"use client"

import Section from "@/components/common/Section";
import background from "public/images/medals_9:16.jpg"

import BackgroundImage from "./common/BackgroundImage";
import laurel from "public/images/laurel.png"
import laurel2 from "public/images/BFF_Laurels2025_OFFICIAL SELECTION_W.png"
import laurel3 from "public/images/Laurels The MVFF 2025 white.png"
import Image from "next/image"
import { urlFor } from "@/data/image";

export default function Hero({ laurels }: { laurels: { image: any, title: string }[] }) {
  return (

    <Section id='home' className='flex h-[80vw] md:h-[60vw] lg:h-[50vw] xl:h-[40vw] flex-col justify-top items-left gap-4' >
      <BackgroundImage
        alt={'Allyson Felix wearing her olympic medals'}
        src={background}
      />
      <div className="p-4 md:p-8 relative">
        <div className={`absolute relative`}>
          {/* {laurels.map((l, i) =>
            <Image
              key={i}
              alt={l.title}
              src={urlFor(l.image)
                .width(200)
                .quality(80)
                .auto("format")
                .url()}
              width={200}
              height={200}
              className={`w-20 sm:w-24 md:w-32 lg:w-36 mb-4 md:mb-8`}
            />)} */}
          <Image
            alt={'Tribeca Festival Official Selection Laurel'}
            src={laurel}
            width={200}
            className={`w-24 md:w-36 mb-8`}
          />
          <Image
            alt={'BGG Official Selection Laurel'}
            src={laurel2}
            width={200}
            className={`w-24 md:w-36 mb-8`}
          />
          <Image
            alt={"The Martha's Vineyard Film Festival Laurel"}
            src={laurel3}
            width={200}
            className={`w-24 md:w-36`}
          />
        </div>
      </div>
    </Section>

  );
}


