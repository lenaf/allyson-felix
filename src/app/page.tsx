
import Divider from "@/components/common/Divider";
import Credits from "@/components/Credits";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
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
]|order(publishedAt desc)[0...12]{_id, text, publication}`;

export default async function IndexPage() {
  const screenings = await client.fetch<SanityDocument[]>(SCREENING_QUERY, {}, {});
  const quotes: IQuote[] = await client.fetch<SanityDocument[]>(QUOTE_QUERY, {}, {}) as any;

  console.log(quotes)
  return (
    <div className="flex flex-col items-center text-gray-300">
      <Hero />
      <Quotes quotes={quotes} />
      <Screenings />
      <Divider />
      <Synopsis />
      <Divider />
      <Impact />
      <Divider />
      <Credits />
      {/* <Divider />
      <Contacts />
      <Divider />
      <Sales /> */}
    </div>
  );
}
