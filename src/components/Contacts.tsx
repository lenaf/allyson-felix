"use client"

import Section from "@/components/common/Section";


export default function Contacts() {
  return (

    <Section id='contacts' className="prose px-4 sm:px-8 md:px-12 py-12" >

      <div >
        <h2 className="mb-2">PRESS CONTACT</h2>
        <div className="text-white text-xl mb-2">Lana Iny </div>
        <div className="">Downtown Community Television Center  </div>
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



    </Section>

  );
}
