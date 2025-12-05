import Divider from "@/components/common/Divider";
import Contacts from "@/components/Contacts";
import Credits from "@/components/Credits";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import PreviewBanner from "@/components/PreviewBanner";
import { IArticle, Press } from "@/components/Press";
import { IQuote, Quotes } from "@/components/Quotes";
import Festivals, {
  IPastFestival,
  IUpcomingFestival,
} from "@/components/Screenings";
import Synopsis from "@/components/Synopsis";
import { getClient } from "@/data/sanity";
import { type SanityDocument } from "next-sanity";
import Teaser from "@/components/Teaser";

const UPCOMING_FESTIVAL_QUERY = `*[
  _type == "upcomingFestival"
]|order(startDate ){_id, title, theatreName, theatreAddress, dates, ticketUrl}`;

const PAST_FESTIVAL_QUERY = `*[
  _type == "pastFestival"
]|order(startDate){_id, title, dates}`;

const QUOTE_QUERY = `*[
  _type == "quote"
]|order(order){_id, text, publication, author, publicationLogo}`;

const PRESS_QUERY = `*[
  _type == "press"
]|order(publishedAt desc){_id, date, publication, image, title, link, publicationLogo}`;

const LAUREL_QUERY = `*[
  _type == "laurel"
]|order(date){image, title, isAward}`;

export const revalidate = 0;

export default async function IndexPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const isPreview = searchParams.preview === "true";
  const client = getClient(isPreview);

  const quotes: IQuote[] = (await client.fetch<SanityDocument[]>(
    QUOTE_QUERY,
    {},
    {}
  )) as any;
  const articles: IArticle[] = (await client.fetch<SanityDocument[]>(
    PRESS_QUERY,
    {},
    {}
  )) as any;
  const pastFestivals: IPastFestival[] = (await client.fetch<SanityDocument[]>(
    PAST_FESTIVAL_QUERY,
    {},
    {}
  )) as any;
  const upcomingFestivals: IUpcomingFestival[] = (await client.fetch<
    SanityDocument[]
  >(UPCOMING_FESTIVAL_QUERY, {}, {})) as any;
  const laurels: any[] = (await client.fetch<SanityDocument[]>(
    LAUREL_QUERY,
    {},
    {}
  )) as any;

  return (
    <div className="flex flex-col items-center text-gray-300">
      {isPreview && <PreviewBanner />}
      <Hero laurels={laurels.filter((l) => !l.isAward)} />
      <Quotes quotes={quotes} laurels={laurels.filter((l) => l.isAward)} />
      <Divider />
      <Teaser />
      <Divider />
      <Festivals
        pastFestivals={pastFestivals}
        upcomingFestivals={upcomingFestivals}
      />
      <Divider />
      <Synopsis />
      <Divider />
      <Impact />
      <Divider />
      <Press articles={articles} />
      <Divider />
      <Credits />
      <Divider />
      <Contacts />
      <Divider />
    </div>
  );
}
