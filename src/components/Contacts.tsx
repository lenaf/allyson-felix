"use client"

import Section from "@/components/common/Section";


export default function Contacts() {
  return (

    <Section id='contacts' className="prose p-12" >

      <div >
        <h2 className="text-primary tracking-normal">Press Contact</h2>
        <div className="text-white">Lana Iny </div>
        <div className="text-sm">Downtown Community Television Center  </div>
        <div className="text-sm">87 Lafayette Street </div>
        <div className="text-sm mb-2">New York, New York 10013</div>
        <a
          href="tel:9179924794"
          className="text-sm underline hover:text-primary transition block"
        >
          (917) 992-4794
        </a>

        <a
          href="mailto:lanainy@gmail.com"
          className="text-sm underline hover:text-primary transition block"
        >
          lanainy@gmail.com
        </a>

      </div>



    </Section>

  );
}
