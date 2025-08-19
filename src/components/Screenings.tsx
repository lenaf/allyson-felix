"use client"

import Section from "@/components/common/Section";

import LinkAsButton from "./common/LinkAsButton";
import { SectionHeader, SectionSubHeader } from "./common/SectionHeader";
import SubmitEmail from "./common/SubmitEmail";
import { PortableText } from "next-sanity";

export type IUpcomingFestival = {
  title: string;
  theatreName?: string;
  theatreAddress?: any;
  dates?: any;
  ticketUrl?: string;
  dateText?: string;
}

export type IPastFestival = {
  title: string;
  dates: any;
  dateText?: string;
}

const UpcomingFestival = ({ festival }: { festival: IUpcomingFestival }) => (
  <div>
    <h4 className="text-primary">{festival.title}</h4>
    <div className="mb-2">
      {festival.theatreName && <div className="text-white text-lg">{festival.theatreName}</div>}
      {festival?.theatreAddress &&
        <div className="text-white prose"> <PortableText value={festival?.theatreAddress} /></div>
      }
      {festival?.dates &&
        <div className="prose"><PortableText value={festival?.dates} /></div>
      }
      {festival.ticketUrl && <LinkAsButton className="h-6 min-h-6 text-lg gap-2 p-0" href={festival.ticketUrl} target="_blank">
        <span className="=">Tickets</span>
        <span aria-hidden="true">&rarr;</span>
      </LinkAsButton>}
    </div>  </div>
)

const PastFestival = ({ festival }: { festival: IPastFestival }) => (
  <div>
    <h4 >{festival.title}</h4>
    {festival?.dates &&
      <div className="prose"> <PortableText value={festival?.dates} /></div>
    }  </div>
)

const getDateFromDateText = (dateText?: string) => {
  const date = (dateText ? new Date(dateText.split(' - ')[0].replace(/\d+(st|nd|rd|th)/, (match) => match.replace(/\D+/g, ''))) : new Date() as any)
  return date
};

const Screenings = ({ pastFestivals, upcomingFestivals }: { pastFestivals: IPastFestival[]; upcomingFestivals: IUpcomingFestival[] }) => {
  return (
    <Section id='screenings' className="prose px-4 sm:px-8 md:px-12 py-12 flex-grow-0" >
      <SectionHeader>Festivals</SectionHeader>
      <div className="flex flex-wrap gap-x-16 gap-y-8">
        <div className="min-w-[400px]">
          <SectionSubHeader>Upcoming Film Festivals</SectionSubHeader>
          <div className="flex flex-col gap-4">
            {upcomingFestivals.sort((a, b) => (getDateFromDateText(b.dateText)) - (getDateFromDateText(a.dateText)))
              .map((festival, i) => <UpcomingFestival festival={festival} key={i} />)}
          </div>
        </div>
        <div className="min-w-[400px]">
          <SectionSubHeader>Past Film Festivals</SectionSubHeader>
          <div className="flex flex-col gap-4">
            {pastFestivals.sort((a, b) => (getDateFromDateText(b.dateText)) - (getDateFromDateText(a.dateText)))
              .map((festival, i) => <PastFestival festival={festival} key={i} />)}
          </div>
        </div>
        <div className="">
          <SectionSubHeader>Distribution</SectionSubHeader>
          <div className="mb-4">
            <div>We are working on a distribution plan! Please check back.</div>
            <div>Leave your email if you would like to be updated.</div>
          </div>
          <SubmitEmail />
        </div>
      </div>
    </Section >

  );
}

export default Screenings;