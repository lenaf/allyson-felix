
import Divider from "@/components/common/Divider";
import Credits from "@/components/Credits";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import { IArticle, Press } from "@/components/Press";
import { IQuote, Quotes } from "@/components/Quotes";
import Screenings from "@/components/Screenings";
import Synopsis from "@/components/Synopsis";
import { client } from "@/data/sanity";
import { type SanityDocument } from "next-sanity";

const SCREENING_QUERY = `*[
  _type == "screening"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const QUOTE_QUERY = `*[
  _type == "quote"
]|order(order)[0...12]{_id, text, publication, author, publicationLogo}`;

const PRESS_QUERY = `*[
  _type == "press"
]|order(publishedAt desc)[0...12]{_id, date, publication, image, title, link, publicationLogo}`;

export default async function IndexPage() {
  const screenings = await client.fetch<SanityDocument[]>(SCREENING_QUERY, {}, {});
  const quotes: IQuote[] = await client.fetch<SanityDocument[]>(QUOTE_QUERY, {}, {}) as any;
  const articles: IArticle[] = await client.fetch<SanityDocument[]>(PRESS_QUERY, {}, {}) as any;

  return (
    <div className="flex flex-col items-center text-gray-300">
      <Hero />
      <Quotes quotes={quotes} />
      <video className="w-[60vw] aspect-vide -mt-4 mb-16" controls preload="metadata" poster="/trailer-image.png">
        <source src="/trailer.mp4" type="video/mp4" />
      </video>

      <Divider />
      <Screenings />
      <Divider />
      <Synopsis />
      <Divider />
      <Impact />
      <Divider />
      <Press articles={articles} />
      <Divider />
      <Credits />
      {/* <Divider />
      <Contacts />
      <Divider />
      <Sales /> */}
    </div>
  );
}
