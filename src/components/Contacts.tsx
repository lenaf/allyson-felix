"use client";

import Section from "@/components/common/Section";
import { SectionHeader, SectionSubHeader } from "./common/SectionHeader";

export default function Contacts() {
  return (
    <Section id="contact" className="prose px-4 sm:px-8 md:px-12 py-12">
      <SectionHeader>Contact</SectionHeader>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-12 ">
        <div>
          <SectionSubHeader>Press Contact</SectionSubHeader>
          <div className="text-gray-100 text-lg mb-1">Lana Iny </div>
          <div className="m-0">Downtown Community Television Center </div>
          <div className="">87 Lafayette Street </div>
          <div className=" mb-2">New York, NY 10013</div>
          <a
            href="tel:9179924794"
            className=" underline hover:text-primary transition block"
          >
            (917) 992-4794
          </a>
          <a
            href="mailto:lanainy@gmail.com"
            className=" underline hover:text-primary transition block"
          >
            lanainy@gmail.com
          </a>
        </div>

        <div>
          <SectionSubHeader>Worldwide Sales Contact</SectionSubHeader>
          <div className="text-gray-100 text-lg mb-2">
            The Film Sales Company{" "}
          </div>
          <div className="mb-2">Andrew Herwitz, President </div>
          <a
            href="mailto:sales@filmsalescorp.com"
            className=" underline hover:text-primary transition block"
          >
            sales@filmsalescorp.com
          </a>
        </div>
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
