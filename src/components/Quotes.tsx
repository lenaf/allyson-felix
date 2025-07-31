"use client"

import Section from "@/components/common/Section";

import LinkAsButton from "./common/LinkAsButton";
import { SectionHeader, SectionSubHeader } from "./common/SectionHeader";

export type IQuote = {
  text: string;
  publication: string;
}

const Quote = ({ quote, className }: { quote: IQuote, className?: string }) => {
  const { text, publication } = quote;
  return (
    <div className={`text-2xl ${className}`}>
      <div className="text-primary uppercase font-black tracking-wider">{text}</div>
      <div className="text-white text-lg">{publication}</div>
    </div>
  )
}

export const Quotes = ({ quotes }: { quotes: IQuote[] }) => {
  return (
    <Section id='quotes' className="prose px-16 md:px-24 py-12 flex-grow-0" >
      <Quote quote={quotes[0]} className="text-center text-4xl mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8">
        {quotes.filter((q, i) => i > 0).map((quote, i) => <Quote quote={quote} key={i} />)}
      </div>
    </Section >

  )
}
