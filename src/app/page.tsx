"use client"

import Divider from "@/components/common/Divider";
import Credits from "@/components/Credits";
import Hero from "@/components/Hero";
import Screenings from "@/components/Screenings";
import Synopsis from "@/components/Synopsis";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Screenings />
      <Divider />
      <Synopsis />
      <Divider />
      <Credits />
    </div>
  );
}
