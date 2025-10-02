"use client";

import Section from "@/components/common/Section";
import { SectionHeader, SectionSubHeader } from "./common/SectionHeader";
import Divider from "./common/Divider";
import siteData from "@/data/siteData";

const Resource = ({ title, description, link, additionalLinks }) => (
  <div className="mb-5">
    <a
      target="_blank"
      href={link}
      className="text-primary font-black text-lg underline-offset-4"
    >
      {title}
    </a>
    <div>
      <p className="my-1">{description}</p>
      {additionalLinks.map((linkItem, index) => (
        <div key={index}>
          <a target="_blank" href={linkItem.url}>
            {linkItem.label}
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default function Impact() {
  const firstColumn = siteData.resources.slice(0, 9);
  const secondColumn = siteData.resources.slice(9);

  return (
    <Section id="impact" className="prose px-4 sm:px-8 md:px-12 py-12">
      <SectionHeader>Impact</SectionHeader>
      <SectionSubHeader>The Problem</SectionSubHeader>

      <p>
        The maternal mortality rate in the U.S. is shockingly high—more than ten
        times that of other high-income countries. Black women are dying at
        three to four times the rate of white women during and after childbirth.
        Much of this can be prevented. According to the CDC, more than 80% of
        pregnancy-related deaths in America are preventable.
      </p>

      <Divider className="my-6" />
      <SectionSubHeader>The Call to Action</SectionSubHeader>
      <p className="my-2">
        {" "}
        <b className="uppercase font-black italic text-gray-100 mr-1">
          She Runs the World{" "}
        </b>
        is more than a film—Allyson's story is a call to action, accountability,
        and positive change in maternal health.
      </p>
      <p className="my-2">
        {" "}
        Allyson Felix used her voice.{" "}
        <b className="font-black text-gray-100">Now it's our turn.</b>
      </p>
      <p className="my-2 text-primary font-black">
        Watch the film. Share the message. Join the movement.
      </p>

      <Divider className="my-6" />

      <SectionSubHeader>RESOURCES AND HOW YOU CAN ENGAGE</SectionSubHeader>
      <div className="md:grid md:grid-cols-2 gap-8">
        <div>
          {firstColumn.map((resource, index) => (
            <Resource
              key={index}
              title={resource.title}
              link={resource.link}
              description={resource.description}
              additionalLinks={resource.additionalLinks}
            />
          ))}
        </div>
        <div>
          {secondColumn.map((resource, index) => (
            <Resource
              key={index}
              title={resource.title}
              link={resource.link}
              description={resource.description}
              additionalLinks={resource.additionalLinks}
            />
          ))}
        </div>
      </div>

      <Divider className="my-6" />

      <SectionSubHeader>An Important Conversation</SectionSubHeader>

      <div className="text-primary font-bold text-lg">
        <i className="mr-1">She Runs The World:</i> The Urgency of Maternal
        Health
      </div>
      <div className="text-gray-100">
        <a
          target="_blank"
          href="https://www.siriusxm.com/player/episode-audio/entity/8fe9fcf7-378b-95b0-ecbe-72151fbbc6fd?utm_medium=shared"
        >
          Listen on SiriusXM{" "}
        </a>
      </div>
      <div>
        <p className="my-2">
          In conjunction with Allyson's story, the creative team behind She Runs
          The World hosted an important hour-long conversation on power,
          parenthood, and finding solutions to the maternal health crisis.
        </p>
        <p className="my-2">
          Stream now to hear Director and SiriusXM host Perri Peltz DrPH, in
          conversation with 11-time Olympic Medalist, Entrepreneur and Maternal
          Health Advocate Allyson Felix, Award-winning journalist, NYT
          bestselling author, Television Host, and birthFUND Founder Elaine
          Welteroth, Executive Producer of She Runs the World and Peabody-award
          winning Director of Aftershock Tonya Lewis Lee, and Dr. Avenel Joseph,
          Interim Executive Vice President at the Robert Wood Johnson
          Foundation. Together, they delved into the maternal health crisis in
          America, the urgency of telling Allyson's story, and the role of
          midwifery and universal healthcare in future solutions. Listen to
          learn how you can engage in the future of maternal healthcare in the
          United States.{" "}
        </p>
      </div>
    </Section>
  );
}
