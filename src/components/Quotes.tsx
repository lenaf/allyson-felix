"use client"

import Section from "@/components/common/Section";
import { urlFor } from "@/data/image";
import Image from "next/image";


export type IQuote = {
  text: string;
  publication: string;
  author?: string;
  publicationLogo?: any
}

const Quote = ({ quote, className }: { quote: IQuote, className?: string }) => {
  const { text, publication, author, publicationLogo } = quote;
  return (
    <div className={`max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] ${className}`}>
      <div className="text-white text-3xl  text-center uppercase font-black tracking-wider">{text}</div>
      <div className="text-md md:text-lg text-right mr-12 flex flex-grow-0 items-center justify-end">
        {author && <span className={`${publication.length > 7 ? 'mr-2' : ''} flex no-wrap`}>{author},</span>}
        <Image
          className="w-24 max-h-6 m-0 object-contain"
          src={urlFor(publicationLogo)
            .width(200)
            .quality(80)
            .auto("format")
            .url()}
          alt={publicationLogo?.alt || ""}
          width="200"
          height="200"
        />
      </div>
    </div>
  )
}

export const Quotes = ({ quotes }: { quotes: IQuote[] }) => {
  return (
    <Section id='quotes' className="prose px-4 sm:px-12 md:px-20 lg:px-32 xl:px-28 py-12 flex flex-col" >

      {quotes.map((quote, i) =>
        <Quote quote={quote} key={i} className={`mb-8 ${(i % 2) ? 'self-end' : ''}`} />
      )}
    </Section >

  )
}
