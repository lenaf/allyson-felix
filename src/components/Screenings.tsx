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
const upcomingFestivals: IFestival[] = [
  {
    name: "Martha's Vineyard Film Festival",
    screenings: [{
      theatre: "The Grange Hall, West Tisbury",
      googleMapHref: "https://www.google.com/maps/place/Grange+Hall/@41.3802293,-70.6752851,17z/data=!3m1!4b1!4m6!3m5!1s0x89e524d95875b387:0xdfbd20718657ae8c!8m2!3d41.3802293!4d-70.6752851!16s%2Fg%2F11cpf9b5ws?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D",
      address: "1067 State Rd, Vineyard Haven, MA",
      dates: [
        { date: "Thursday, July 10", time: "5:00 PM" },
        { date: "Thursday, July 10", time: "8:00 PM" }

      ],
      ticketLink: "https://circuitarts.org/sherunstheworld"
    }]
  }
]

const pastFestivals: IFestival[] = [
  {
    name: 'Tribeca Festival',
    screenings: [
      {
        theatre: "SVA Theatre 1 - Silas",
        googleMapHref: "https://www.google.com/maps?q=333+W+23rd+St,+New+York,+NY+10011",
        address: "333 W 23rd Street, NY",
        dates: [{ date: "Thursday, June 5th 2025", time: "8:30 PM" }]
      },
      {
        theatre: "Village East by Angelika",
        googleMapHref: "https://www.google.com/maps?q=181-189+2nd+Ave,+New+York,+NY+10003",
        address: " 181–189 2nd Ave, NY",
        dates: [
          { date: "Sat, June 7th 2025", time: "3:15 PM" },
          { date: "Sun, June 8th 2025", time: "6:15 PM" },
          { date: "Sat, June 14th 2025", time: "12:15 PM" }
        ]
      },
    ]
  },
  {
    name: 'Bentonville Film Festival',
    screenings: [
      {
        theatre: "Skylight Cinema",
        googleMapHref: "https://www.google.com/maps/place/Skylight+Cinema/@36.3684428,-94.2132482,16z/data=!3m1!4b1!4m6!3m5!1s0x87c91a98d0b54cdf:0x147c1970e86cc757!8m2!3d36.3684385!4d-94.2106679!16s%2Fg%2F11gbxb90s5?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D",
        address: "350 SW A St, Bentonville, AR",
        dates: [
          { date: "Wed, June 18th 2025", time: "6:30 PM" },
        ]
      },
    ]
  }];


const Festival = ({ festival }: { festival: IFestival }) => (
  <div className="mb-4">
    <h4 className="text-primary">{festival.name}</h4>
    {festival.screenings.map((screening, i) => <Screening screening={screening} key={i} />)}
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

    <Section id='screenings' className="prose px-4 sm:px-8 md:px-12 py-12" >
      {/* <SectionHeader>Screenings</SectionHeader> */}

      <div className="md:grid md:grid-cols-2 gap-8">
        <div >
          <SectionSubHeader>Upcoming Screenings</SectionSubHeader>
          {upcomingFestivals.map((festival, i) => <Festival festival={festival} key={i} />)}
        </div>
        <div >
          <SectionSubHeader>Past Screenings</SectionSubHeader>
          {pastFestivals.map((festival, i) => <Festival festival={festival} key={i} />)}
        </div>
      </div>

    </Section >

  );
}
