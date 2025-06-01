"use client"

import Section from "@/components/common/Section";
import SectionHeader from "./common/SectionHeader";


const Resource = ({ title, description }) => (
  <div className="mb-3">
    <h5 className="text-primary">{title}</h5>
    <div className="text-lg"> {description}</div>
  </div>
)

export default function Impact() {
  return (

    <Section id='impact' className="prose px-4 sm:px-8 md:px-12 py-12" >

      <SectionHeader>Impact</SectionHeader>
      <h3 className="text-primary uppercase">{'THE PROBLEM'}</h3>

      <p>
        The U.S. maternal mortality rate is more than 10 times higher than that of other high-income countries. Black women are dying at 3 to 4 times the rate of white women during and after childbirth. 80% of maternal deaths can be avoided.
      </p>

      <h4 className="text-primary">She Runs The World: The Urgency of Maternal Health</h4>
      <a>Thursday, June 5th 2025 11:00 AM ET | Listen on SiriusXM </a>
      <p>
        The creative team behind She Runs The World convenes for an important hour-long conversation on power, parenthood, and fixing the maternal health crisis
      </p>
      <p>
        Join director and SiriusXM host Perri Peltz DrPH, for a conversation with five-time Olympian Allyson Felix, birthFUND founder Elaine Welteroth, Executive Producer of She Runs the World and Peabody-award winning Director of Aftershock Tonya Lewis Lee, and Dr. Avenel Joseph, Vice President of Policy at the Robert Wood Johnson Foundation. Together, they delve into the maternal health crisis in America, the urgency of telling Allyson’s story, and role of midwifery and equity in future solutions. Learn how you can engage in the future of maternal health in the United States.
      </p>

      <h4 className="text-primary">RESOURCES</h4>

      <Resource
        title={'birthFUND'}
        description={
          `birthFUND is combating the maternal mortality crisis one birth at a time by expanding access to high-quality, compassionate midwifery care, matching funders with families across the country who need it most. Money donated and raised is directly sent to support midwifery care for a family in a highly impacted community.`
        }
      />

      <Resource
        title={'Robert Wood Johnson Foundation'}
        description={
          `RWJF is a leading national philanthropy dedicated to taking bold leaps to transform health in our lifetime by working to dismantle structural racism and other barriers to health. Through funding, convening, advocacy, and evidence-building, RWJF works side-by-side with communities, practitioners, and institutions to get to health equity faster and pave the way together to a future where health is no longer a privilege, but a right.`}
      />

      <Resource
        title={'Black Mamas Matter Alliance'}
        description={
          `A Black women-led cross-sectoral alliance that centers Black mamas and birthing people to advocate, drive research, build power, and shift culture for Black maternal health, rights, and justice.`}
      />

      <Resource
        title={'SisterSong'}
        description={
          `Our purpose is to build an effective network of individuals and organizations to improve institutional policies and systems that impact the reproductive lives of marginalized communities.`}
      />

      <Resource
        title={'Ancient Song Doula Services'}
        description={
          `We provide doula training and services, offer community education, and advocate for policy change to support reproductive and birth justice.`
        } />

      <Resource
        title={'Birth Center Equity'}
        description={
          `We are creating a world where every community has access to a birth center and midwives, families, and communities of color thrive.`
        } />

      <Resource
        title={'Ms. Foundation'}
        description={
          `We build women’s collective power in the U.S. by investing in, and strengthening, the capacity of women-led movements to advance meaningful social, cultural, and economic change.`
        } />

      <Resource
        title={'Commonsense Childbirth Inc.'}
        description={
          `Our programs operate across the perinatal health ecosystem with a focus on safety, quality and workforce development in support of – and rooted in – our vision for equitable perinatal care.`
        } />

      <Resource
        title={'Southern Birth Justice Network'}
        description={
          `Our model, Black Midwives Care, is designed to meet the needs of pregnant, birthing and postpartum Black mothers and parents.`
        } />

      <Resource
        title={'HoPE Doula Program at Mount Sinai'}
        description={
          `Mount Sinai Hospital, in partnership with NYC Health + Hospitals, the largest public hospital system in the nation, is piloting a community-based doula care program to serve low-income pregnant women.`
        } />

      <Resource
        title={'Black Women’s Blueprint'}
        description={
          `Black Women’s Blueprint (B.W.B.) partners with mental health and obstetric providers to build racial equity in maternal health and early childhood services.`
        } />

      <Resource
        title={'One Brooklyn Health System'}
        description={
          `One Brooklyn is scaling three evidence-based programs with the goal of reducing racial disparities in birth outcomes: Centering Pregnancy, Healthy Families, and Healthy Steps.`
        } />

      <Resource
        title={'CAMBA-Moving Mothers’ Health Forward'}
        description={
          `Seeks to bridge the gap in access to care for underserved, high-risk women through on-site support services in our Brooklyn-based family shelters and NYCHA Developments served by CAMBA’s Cornerstone Community Centers.`
        } />

      <Resource
        title={'Bounded By Baby by Social Creatures'}
        description={
          `A comprehensive postpartum care program dedicated to supporting new parents for the crucial first year after childbirth through community-based cohorts.`
        } />

      CALL TO ACTION
      Together, we can rewrite the story.
      She Runs the World is more than a film—Allysons story is a call to action, accountability, and positive change in maternal health.
      Allyson Felix used her voice. Now it’s time to use ours.
      Watch the film. Share the message. Join the movement.

    </Section>

  );
}
