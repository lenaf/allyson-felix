"use client"

import Section from "@/components/common/Section";

import LinkAsButton from "./common/LinkAsButton";

export default function Screenings() {
  return (

    <Section id='screening' className="prose p-12" >
      <div className="md:grid md:grid-cols-2 gap-8">

        <div >
          <h2 className="text-primary tracking-normal">WORLD PREMIER</h2>
          <div className="text-white -mb-1">SVA Theatre </div>
          <div className="text-xs mb-2">333 W 23rd St, New York, NY 10011</div>
          <div className="">Thursday, June 5th 2025 <span>8:30pm</span> </div>
          <LinkAsButton className="h-6 min-h-6 gap-2 p-0" href="https://tribecafilm.com/films/she-runs-the-world-2025" target="_blank">
            <span className="=">Tickets</span>
            <span aria-hidden="true">&rarr;</span>
          </LinkAsButton>
        </div>

        <div >
          <h2 className="text-primary tracking-normal">MORE SCREENINGS</h2>
          <div className="text-white -mb-1">Village East by Angelika </div>
          <div className="text-xs mb-2">181-189 2nd Ave, New York, NY 10003</div>
          <div className="">Sat, June 7th 2025 <span>3:15pm</span> </div>
          <div className="">Sat, June 8th 2025 <span>6:15pm</span> </div>
          <div className="">Sat, June 14th 2025 <span>12:15</span> </div>
          <LinkAsButton className="h-6 min-h-6 gap-2 p-0" href="https://tribecafilm.com/films/she-runs-the-world-2025" target="_blank">
            <span className="=">Tickets</span>
            <span aria-hidden="true">&rarr;</span>
          </LinkAsButton>
        </div>
      </div>

    </Section>

  );
}
