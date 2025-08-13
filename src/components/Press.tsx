"use client"

import Section from "@/components/common/Section";

import { SectionHeader } from "./common/SectionHeader";
import Image from "next/image";


import { urlFor } from "@/data/image";
import { PortableText } from "next-sanity";


export type IArticle = {
  date: string;
  publication: string;
  articleLink: any;
  image: any;
  publicationLogo?: any

}

const Article = ({ article, className }: { article: IArticle, className?: string }) => {
  const { date, publicationLogo, articleLink, image } = article;
  console.log(articleLink)
  console.log(image.asset)
  console.log(urlFor(image)
    .width(800)
    .height(300)
    .quality(80)
    .auto("format")
    .url())
  return (
    <div className={`${className}`}>
      <Image
        className="w-full aspect-[16/9] mt-0 mb-2"
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
      <div className="text-primary -mb-4">
        <PortableText value={articleLink} />
      </div>
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
      <div className="text-white">{date}</div>
    </div>
  )
}

export const Press = ({ articles }: { articles: IArticle[] }) => {
  return (
    <Section id='press' className="prose px-4 sm:px-8 md:px-12 py-12">
      <SectionHeader>Press</SectionHeader>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 mb-8">
        {articles.map((article, i) => <Article article={article} key={i} />)}
      </div>
    </Section >

  )
}
