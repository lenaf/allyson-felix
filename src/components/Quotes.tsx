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
    <div className={`text-2xl text-center ${className}`}>
      <div className="text-primary uppercase font-black tracking-wider">{text}</div>
      <div className="text-white text-lg">{publication}</div>
    </div>
  )
}

export const Quotes = ({ quotes }: { quotes: IQuote[] }) => {
  return (
    <Section id='quotes' className="prose px-16 md:px-24 py-12 flex-grow-0" >
      <Quote quote={quotes[0]} className="text-center text-3xl mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
        {quotes.filter((q, i) => i > 0 && i < quotes.length - 1).map((quote, i) => <Quote quote={quote} key={i} />)}
      </div>
      <Quote quote={quotes[quotes.length - 1]} className="text-center text-3xl mb-8" />
    </Section >

  )
}
