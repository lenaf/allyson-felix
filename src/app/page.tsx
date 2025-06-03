"use client"

import Divider from "@/components/common/Divider";
import Contacts from "@/components/Contacts";
import Credits from "@/components/Credits";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Sales from "@/components/Sales";
import Screenings from "@/components/Screenings";
import Synopsis from "@/components/Synopsis";

export default function Home() {
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
      <Divider />
      <Contacts />
      <Divider />
      <Sales />
    </div>
  );
}
