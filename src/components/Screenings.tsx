"use client"

import Section from "@/components/common/Section";

import LinkAsButton from "./common/LinkAsButton";

export default function Screenings() {
  return (

    <Section id='screening' className="prose p-4 sm:p-8 md:p-12" >
      <div className="md:grid md:grid-cols-2 gap-8">

        <div >
          <h2 className="text-primary tracking-normal">WORLD PREMIERE</h2>
          <div className="text-white text-lg">SVA Theatre 1 - Silas </div>
          <a
            href="https://www.google.com/maps?q=333+W+23rd+St,+New+York,+NY+10011"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 no-underline hover:text-primary transition"
          >
            333 W 23rd Street, NY
          </a>
          <div className="">Thursday, June 5th 2025 <span>8:30 PM</span> </div>
          <LinkAsButton className="h-6 min-h-6 gap-2 p-0" href="https://tribecafilm.com/films/she-runs-the-world-2025" target="_blank">
            <span className="=">Tickets</span>
            <span aria-hidden="true">&rarr;</span>
          </LinkAsButton>
        </div>

        <div >
          <h2 className="text-primary tracking-normal">MORE SCREENINGS</h2>
          <div className="text-white text-lg">Village East by Angelika </div>
          <a
            href="https://www.google.com/maps?q=181-189+2nd+Ave,+New+York,+NY+10003"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 no-underline hover:text-primary transition"
          >
            181–189 2nd Ave, NY
          </a>
          <div className="">Sat, June 7th 2025 <span>3:15 PM</span> </div>
          <div className="">Sat, June 8th 2025 <span>6:15 PM</span> </div>
          <div className="">Sat, June 14th 2025 <span>12:15 PM</span> </div>
          <LinkAsButton className="h-6 min-h-6 gap-2 p-0" href="https://tribecafilm.com/films/she-runs-the-world-2025" target="_blank">
            <span className="=">Tickets</span>
            <span aria-hidden="true">&rarr;</span>
          </LinkAsButton>
        </div>
      </div>

    </Section>

  );
}
