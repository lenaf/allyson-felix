"use client"

import Section from "@/components/common/Section";

import LinkAsButton from "./common/LinkAsButton";
import { SectionHeader, SectionSubHeader } from "./common/SectionHeader";

type IScreening = {
  theatre: string;
  googleMapHref: string;
  address: string;
  dates: {
    date: string;
    time: string
  }[];
  ticketLink?: string;
}

type IFestival = {
  name: string;
  screenings: IScreening[]
}

type IPastFestival = {
  name: string;
  dates: string;
}
const upcomingFestivals: IFestival[] = [

]

const pastFestivals: IPastFestival[] = [
  {
    name: 'Tribeca Festival',
    dates: 'June 4th - 15th'
  },
  {
    name: 'Bentonville Film Festival',
    dates: 'June 16th - 22nd',
  },
  {
    name: "Martha's Vineyard Film Festival Summer Series",
    dates: 'June 20th - September 5th'
  }];


const Festival = ({ festival }: { festival: IFestival }) => (
  <div className="mb-4">
    <h4 className="text-primary">{festival.name}</h4>
    {festival.screenings.map((screening, i) => <Screening screening={screening} key={i} />)}
  </div>
)

const PastFestival = ({ festival }: { festival: IPastFestival }) => (
  <div className="mb-4">
    <h4 className="">{festival.name}</h4>
    <div>{festival.dates}</div>
  </div>
)


const Screening = ({ screening }: { screening: IScreening }) => {
  const { theatre, googleMapHref, address, dates, ticketLink } = screening;
  return (
    <div className="mb-2">
      <div className="text-white text-lg">{theatre}</div>
      <a
        href={googleMapHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 no-underline hover:text-primary transition"
      >
        {address}
      </a>
      {dates.map(({ date, time }) => <div key={date}>{date} <span>{time}</span> </div>)}

      {ticketLink && <LinkAsButton className="h-6 min-h-6 text-lg gap-2 p-0 mb-4" href={ticketLink} target="_blank">
        <span className="=">Tickets</span>
        <span aria-hidden="true">&rarr;</span>
      </LinkAsButton>}
    </div>
  )
}

export default function Screenings() {
  return (

    <Section id='screenings' className="prose px-4 sm:px-8 md:px-12 py-12 flex-grow-0" >
      <SectionSubHeader>Past Screenings</SectionSubHeader>
      <div >
        {pastFestivals.map((festival, i) => <PastFestival festival={festival} key={i} />)}
      </div>
    </Section >

  );
}
