"use client"

import Section from "@/components/common/Section";
import { SectionHeader, SectionSubHeader } from "./common/SectionHeader";
import Divider from "./common/Divider";


const Resource = ({ title, description, link }) => (
  <div className="mb-5">
    <a target="_blank" href={link} className="text-primary font-black text-lg underline-offset-4">{title}</a>
    {description}
  </div>
)

export default function Impact() {
  return (

    <Section id='impact' className="prose px-4 sm:px-8 md:px-12 py-12" >

      <SectionHeader>Impact</SectionHeader>
      <SectionSubHeader>The Problem</SectionSubHeader>

      <p>
        The maternal mortality rate in the U.S. is shockingly high—more than ten times that of other high-income countries. Black women are dying at three to four times the rate of white women during and after childbirth. Much of this can be prevented. According to the CDC, more than 80% of pregnancy-related deaths in America are preventable.
      </p>

      <Divider className="my-6" />
      <SectionSubHeader>The Call to Action</SectionSubHeader>
      <p className="my-2"> <b className="uppercase font-black italic text-gray-100 mr-1">She Runs the World </b>
        is more than a film—Allyson’s story is a call to action, accountability, and positive change in maternal health.
      </p>
      <p className="my-2"> Allyson Felix used her voice. <b className="font-black text-gray-100">Now it’s our turn.</b></p>
      <p className="my-2 text-primary font-black">Watch the film. Share the message. Join the movement.</p>



      <Divider className="my-6" />

      <SectionSubHeader>RESOURCES & HOW YOU CAN ENGAGE</SectionSubHeader>
      <div className="md:grid md:grid-cols-2 gap-8">
        <div>
          <Resource
            title={'birthFUND'}
            link={'https://www.thebirthfund.com/'}
            description={
              <div>
                <p className="my-1">
                  birthFUND is combating the maternal mortality crisis one birth at a time by expanding access to high-quality, compassionate midwifery care, matching funders with families across the country who need it most. Money donated and raised is directly sent to support midwifery care for a family in a highly impacted community.</p>
                <div>
                  <a
                    target="_blank"
                    href={'https://www.thebirthfund.com/get-involved'}
                  >
                    Start a birthFUNDing circle</a>
                </div>
                <div>

                  <a target="_blank"
                    href={'https://birthfund.donorsupport.co/page/FUNEVZZTEDN'}

                  >
                    Donate today, and help fund one birth</a>
                </div>
              </div>
            }
          />

          <Resource
            title={'Robert Wood Johnson Foundation'}
            link={'https://www.rwjf.org/'}
            description={
              <div>
                <p className="my-1">
                  RWJF is a leading national philanthropy dedicated to taking bold leaps to transform health in our lifetime by working to dismantle structural racism and other barriers to health. Through funding, convening, advocacy, and evidence-building, RWJF works side-by-side with communities, practitioners, and institutions to get to health equity faster and pave the way together to a future where health is no longer a privilege, but a right.`
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://www.rwjf.org/en/grants/grantee-stories/2025/04/how-community-based-doula-care-can-help-solve-our-maternal-health-crisis.html'}
                  >
                    Learn more about solutions to the maternal health crisis</a>
                </div>
              </div>
            }
          />

          <Resource
            title={'Black Mamas Matter Alliance'}
            link={'https://blackmamasmatter.org/'}
            description={
              <div>
                <p className="my-1">
                  A Black women-led cross-sectoral alliance that centers Black mamas and birthing people to advocate, drive research, build power, and shift culture for Black maternal health, rights, and justice.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://www.mightycause.com/organization/Black-Mamas-Matter-Alliance'}
                  >
                    Donate today</a>
                </div>
              </div>
            }
          />

          <Resource
            title={'SisterSong'}
            link={'https://www.sistersong.net/'}
            description={
              <div>
                <p className="my-1">
                  Our purpose is to build an effective network of individuals and organizations to improve institutional policies and systems that impact the reproductive lives of marginalized communities.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://host.nxt.blackbaud.com/donor-form/?envid=p-j9YabJh9Y0GTMn0jEjfP6w&formId=a415e417-77e8-466d-a2b1-92f72174039f&svcid=renxt&zone=usa'}
                  >
                    Donate directly to GA, KY, or NC state programming</a>
                </div>
              </div>
            }
          />

          <Resource
            title={'Ancient Song Doula Services'}
            link={'https://www.ancientsongdoulaservices.com/'}
            description={
              <div>
                <p className="my-1">
                  We provide doula training and services, offer community education, and advocate for policy change to support reproductive and birth justice.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://www.paypal.com/donate/?business=ancientsongdoula%40gmail.com&cmd=_donations&currency_code=USD&item_name=Ancient%20Song%20Doula%20Services'}
                  >
                    Donate to support doula services</a>
                </div>
              </div>
            } />

          <Resource
            title={'Birth Center Equity'}
            link={'https://birthcenterequity.org/'}
            description={
              <div>
                <p className="my-1">
                  We are creating a world where every community has access to a birth center and midwives, families, and communities of color thrive.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://birthcenterequityfund.networkforgood.com/'}
                  >
                    Donate to ensure access to community birthing centers across the U.S.</a>
                </div>
              </div>
            } />

          <Resource
            title={'Ms. Foundation'}
            link={'https://forwomen.org/'}
            description={
              <div>
                <p className="my-1">
                  We build women’s collective power in the U.S. by investing in, and strengthening, the capacity of women-led movements to advance meaningful social, cultural, and economic change.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://forwomen.org/get-involved/'}
                  >
                    Get Involved
                  </a>
                </div>
              </div>
            } />

          <Resource
            title={'Commonsense Childbirth Inc.'}
            link={'https://commonsensechildbirth.org/'}
            description={
              <div>
                <p className="my-1">
                  Our programs operate across the perinatal health ecosystem with a focus on safety, quality and workforce development in support of – and rooted in – our vision for equitable perinatal care.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://commonsensechildbirth.org/donate/'}
                  >
                    Support clinical services, midwifery education, and perinatal workforce care
                  </a>
                </div>
              </div>
            } />

        </div>
        <div>


          <Resource
            title={'Southern Birth Justice Network'}
            link={'https://southernbirthjustice.org/'}
            description={
              <div>
                <p className="my-1">
                  Our model, Black Midwives Care, is designed to meet the needs of pregnant, birthing and postpartum Black mothers and parents.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://buy.stripe.com/fZe3cdcXP4bB99KcMN'}
                  >
                    Donate today
                  </a>
                </div>
              </div>
            } />

          <Resource
            title={'HoPE Doula Program at Mount Sinai'}
            link={'https://www.hopedoulaprogram.org/'}
            description={
              <div>
                <p className="my-1">
                  The HOPE Program (Helping Promote Birth-Equity through Community-Based Doula Care) provides doula care, free of charge, to NYC residents who are pregnant or recently gave birth, regardless of immigration status.
                </p>
              </div>
            } />

          <Resource
            title={'Black Women’s Blueprint'}
            link={'https://restoreny.org/black-womens-blueprint/'}
            description={
              <div>
                <p className="my-1">
                  Black Women’s Blueprint (B.W.B.) partners with mental health and obstetric providers to build racial equity in maternal health and early childhood services.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://blackwomensblueprint.ourpowerbase.net/civicrm/contribute/transact?reset=1&id=4'}
                  >
                    Donate today
                  </a>
                </div>
              </div>
            } />

          <Resource
            title={'One Brooklyn Health System'}
            link={'https://onebrooklynhealth.org/'}
            description={
              <div>
                <p className="my-1">
                  One Brooklyn is scaling three evidence-based programs with the goal of reducing racial disparities in birth outcomes: Centering Pregnancy, Healthy Families, and Healthy Steps.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://onebrooklynhealth.org/donate'}
                  >
                    Donate today
                  </a>
                </div>
              </div>
            } />

          <Resource
            title={'CAMBA-Moving Mothers’ Health Forward'}
            link={'https://camba.org/programs/moving-mothers-health-forward-program/'}
            description={
              <div>
                <p className="my-1">
                  Seeks to bridge the gap in access to care for underserved, high-risk women through on-site support services in our Brooklyn-based family shelters and NYCHA Developments served by CAMBA’s Cornerstone Community Centers.
                </p>
              </div>
            } />

          <Resource
            title={'Bonded By Baby | Social Creatures'}
            link={'https://www.thesocialcreatures.org/bondedbybaby'}
            description={
              <div>
                <p className="my-1">
                  A comprehensive postpartum care program dedicated to supporting new parents for the crucial first year after childbirth through community-based cohorts.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://www.thesocialcreatures.org/donate'}
                  >
                    Donate to help sustain and grow our programs
                  </a>
                </div>
              </div>
            } />

          <Resource
            title={'Oklahoma Birth Equity Initiative'}
            link={'https://www.okbirthequity.org/about?_gl=1*1ua0fs5*_up*MQ..*_ga*MTI5MDQ3NjM5NC4xNzQ4ODg1MDg2*_ga_J2PWH4WCP3*czE3NDg4OTUxNTMkbzIkZzEkdDE3NDg4OTUyMDckajYkbDAkaDA.'}
            description={
              <div>
                <p className="my-1">
                  OKBEI works tirelessly to equip families to have healthy births with dignity and reduce health disparities among pregnant women—so that all of Oklahoma can grow together.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://www.okbirthequity.org/donate'}
                  >
                    Support Oklahoma families in need with birthing care and doula training
                  </a>
                </div>
              </div>
            } />


          <Resource
            title={'The Birthing Place'}
            link={'https://thebirthingplace.co/'}
            description={
              <div>
                <p className="my-1">
                  We are BIPOC-led, multilingual and serving our community with the desire to create a maternity care system that centers the marginalized.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://thebirthingplace.co/support-our-growth/'}
                  >
                    $5M Campaign to Expand The Birthing Place in the Bronx
                  </a>
                </div>
              </div>
            } />

          <Resource
            title={'Irth: Birth Without Bias'}
            link={'https://irthapp.com/'}
            description={
              <div>
                <p className="my-1">
                  The number one “Yelp-like” platform for the pregnancy and new motherhood journey, made by and for people of color.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://irthapp.com/the-crown-circle/'}
                  >
                    Support Birth Equity with Irth
                  </a>
                </div>
              </div>
            } />

          <Resource
            title={'Columbia University Mailman School of Public Health'}
            link={'https://www.publichealth.columbia.edu/'}
            description={
              <div>
                <p className="my-1">
                  Columbia Mailman works to address maternal mortality in the United States through groundbreaking research in partnership with community organizations.
                </p>
                <div>
                  <a
                    target="_blank"
                    href={'https://www.publichealth.columbia.edu/reproductive-health'}
                  >
                    Help support our research on maternal and reproductive health at Columbia Mailman
                  </a>
                </div>
              </div>
            } />
        </div>
      </div>

      {/* <Divider className="my-6" />

      <SectionSubHeader>An Important Conversation</SectionSubHeader>

      <div className="text-primary font-bold text-lg">She Runs The World: The Urgency of Maternal Health</div>
      <div className="text-gray-100">Thursday, June 5th 2025 11:00 AM ET | <a href=''>Listen on SiriusXM </a></div>
      <div >
        <p className="my-2">
          In conjunction with Allyson’s story, the creative team behind She Runs The World hosted an important hour-long conversation on power, parenthood, and fixing the maternal health crisis.        </p>
        <p className="my-2">
          Tune in to hear Director and SiriusXM host Perri Peltz DrPH, in conversation with 11-time Olympic Medalist, Entrepreneur and Maternal Health Advocate Allyson Felix, birthFUND founder Elaine Welteroth, Executive Producer of She Runs the World and Peabody-award winning Director of Aftershock Tonya Lewis Lee, and Dr. Avenel Joseph, Vice President of Policy at the Robert Wood Johnson Foundation. Together, they delved into the maternal health crisis in America, the urgency of telling Allyson’s story, and role of midwifery and equity in future solutions. Listen to learn how you can engage in the future of maternal health in the United States.         </p>
      </div> */}

    </Section>

  );
}
