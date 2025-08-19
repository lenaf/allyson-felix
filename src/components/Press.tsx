"use client"

import Section from "@/components/common/Section";

import { SectionHeader } from "./common/SectionHeader";
import Image from "next/image";


import { urlFor } from "@/data/image";
import { Carousel } from "./common/Carousel";
import useBreakpoint from "use-breakpoint";


export type IArticle = {
  date: string;
  publication: string;
  title: string;
  link: string;
  image: any;
  publicationLogo?: any

}

const Article = ({ article, className }: { article: IArticle, className?: string }) => {
  const { date, publicationLogo, title, link, publication, image } = article;

  return (
    <a href={link} target="_blank" className={`${className} no-underline`}>
      <Image
        className="w-full aspect-[16/9] mt-0 mb-3"
        src={urlFor(image)
          .width(1600)
          .height(900)
          .quality(80)
          .auto("format")
          .url()}
        alt={image?.alt || ""}
        width="1600"
        height="900"
      />
      <div className="line-clamp-2 min-h-[2.5em] leading-[1.3] mb-2">
        {title}
      </div>
      <div className="flex items-end justify-between">
        <div className="text-sm">{date}</div>

        {publicationLogo ? <Image
          className="w-20 h-6 m-0 object-contain"
          src={urlFor(publicationLogo)
            .width(200)
            .quality(80)
            .auto("format")
            .url()}
          alt={publicationLogo?.alt || ""}
          width="200"
          height="200"
        /> : <div className="h-6">{publication}</div>}
      </div>
    </a>
  )
}

export const Press = ({ articles }: { articles: IArticle[] }) => {
  const { breakpoint } = useBreakpoint({ mobile: 0, tablet: 768, desktop: 1280 })
  return (
    <Section id='press' className="prose px-4 sm:px-8 md:px-12 py-12">
      <SectionHeader>Press</SectionHeader>
      <Carousel showArrows={true} id='press' itemsToShow={breakpoint === 'mobile' ? 2 : 3} gap={breakpoint === 'mobile' ? 4 : 8}>
        {articles.sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any))
          .map((article, i) => <Article article={article} key={i} />)}
      </Carousel>
    </Section >

  )
}
