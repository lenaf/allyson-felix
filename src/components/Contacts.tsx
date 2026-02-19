"use client"

import Section from "@/components/common/Section";
import { SectionHeader, SectionSubHeader } from "./common/SectionHeader";


export default function Contacts() {
  return (

    <Section id='contact' className="prose px-4 sm:px-8 md:px-12 py-12" >
      <SectionHeader>Contact</SectionHeader>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-12 '>
        <div >
          <SectionSubHeader>Press Contact</SectionSubHeader>
          <div className="text-gray-100 text-lg mb-2">MerriPat Productions</div>
          <a href="mailto:info@sherunstheworldfilm.com" className=" underline hover:text-primary transition block">
            info@sherunstheworldfilm.com
          </a>
        </div>

        <div>
          <SectionSubHeader>Worldwide Sales Contact</SectionSubHeader>
          <div className="text-gray-100 text-lg mb-2">The Film Sales Company</div>
          <a href="mailto:sales@filmsalescorp.com" className=" underline hover:text-primary transition block">
            sales@filmsalescorp.com
          </a>
        </div>

      </div>

      <div className="mt-12 pt-8 border-t border-gray-600">
        <div className="text-white">
          All other inquiries can be sent to{" "}
          <a 
            href="mailto:info@sherunstheworldfilm.com" 
            className="text-primary underline hover:text-primary transition"
          >
            info@sherunstheworldfilm.com
          </a>
        </div>
      </div>

    </Section>

  );
}