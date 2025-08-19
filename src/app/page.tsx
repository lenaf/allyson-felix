
import Divider from "@/components/common/Divider";
import Credits from "@/components/Credits";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import { IArticle, Press } from "@/components/Press";
import { IQuote, Quotes } from "@/components/Quotes";
import Festivals, { IPastFestival, IUpcomingFestival } from "@/components/Screenings";
import Synopsis from "@/components/Synopsis";
import { client } from "@/data/sanity";
import { type SanityDocument } from "next-sanity";

const UPCOMING_FESTIVAL_QUERY = `*[
  _type == "upcomingFestival"
]|order(publishedAt)[0...12]{_id, title, theatreName, theatreAddress, dates, ticketUrl, "dateText": dates[0].children[0].text}`;

const PAST_FESTIVAL_QUERY = `*[
  _type == "pastFestival"
]|order(publishedAt)[0...12]{_id, title, dates, "dateText": dates[0].children[0].text}`;

const QUOTE_QUERY = `*[
  _type == "quote"
]|order(order)[0...12]{_id, text, publication, author, publicationLogo}`;

const PRESS_QUERY = `*[
  _type == "press"
]|order(publishedAt desc)[0...12]{_id, date, publication, image, title, link, publicationLogo}`;

export default async function IndexPage() {
  const quotes: IQuote[] = await client.fetch<SanityDocument[]>(QUOTE_QUERY, {}, {}) as any;
  const articles: IArticle[] = await client.fetch<SanityDocument[]>(PRESS_QUERY, {}, {}) as any;
  const pastFestivals: IPastFestival[] = await client.fetch<SanityDocument[]>(PAST_FESTIVAL_QUERY, {}, {}) as any;
  const upcomingFestivals: IUpcomingFestival[] = await client.fetch<SanityDocument[]>(UPCOMING_FESTIVAL_QUERY, {}, {}) as any;
  console.log(pastFestivals, upcomingFestivals)

  return (
    <div className="flex flex-col items-center text-gray-300">
      <Hero />
      <Quotes quotes={quotes} />
      <video className="w-[60vw] aspect-video -mt-4 mb-16" controls preload="metadata" poster="/trailer-image.png">
        <source src="/trailer.mp4" type="video/mp4" />
      </video>

      <Divider />
      <Festivals pastFestivals={pastFestivals} upcomingFestivals={upcomingFestivals} />
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
