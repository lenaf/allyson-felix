
import Divider from "@/components/common/Divider";
import Credits from "@/components/Credits";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Screenings from "@/components/Screenings";
import Synopsis from "@/components/Synopsis";
import { client } from "@/data/sanity";
import { type SanityDocument } from "next-sanity";

const SCREENING_QUERY = `*[
  _type == "screening"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export default async function IndexPage() {
  const screenings = await client.fetch<SanityDocument[]>(SCREENING_QUERY, {}, {});
  console.log(screenings)
  return (
    <div className="flex flex-col items-center text-gray-300">
      <Hero />
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
