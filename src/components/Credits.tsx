"use client"

import Section from "@/components/common/Section";
import SectionHeader from "./common/SectionHeader";
import Divider from "./common/Divider";

const Role = ({ children }) => <h3 className="text-primary uppercase">{children}</h3>
const Description = ({ children }) => <span className="ml-3 text-sm text-gray-300 ">{children}</span>

const Credit = ({ role, credit }) => <div className="mb-3">
  <Role>{role}</Role>
  <div className="text-lg"> {credit}</div>
</div>

export default function Credits() {
  return (

    <Section id='credits' className="prose px-4 sm:px-8 md:px-12 py-12">
      <SectionHeader>Credits</SectionHeader>
      <div className="md:grid md:grid-cols-2 gap-8">
        <div>
          <Credit role='Featured Cast' credit={
            <ul>
              <li>Allyson Felix</li>
              <li>Wes Felix<Description>Allyson’s brother & manager </Description> </li>
              <li>Dr. Paul and Marlean Felix<Description>Allyson’s parents </Description> </li>
              <li>Pat Connolly<Description>Olympian and coach</Description></li>
              <li>Joanna Hayes<Description>Olympian and friend</Description></li>
              <li>Jackie Joyner-Kersee<Description>Six-time Olympic medalist </Description> </li>
              <li>Coach Bob Kersee <Description>Allyson’s former coach </Description> </li>
            </ul>} />
          <Credit role='Directors' credit={`Perri Peltz, Matthew O'Neill`} />
          <Credit role='Producer' credit={`Lisa Binns`} />
          <Credit role='Co-Producer' credit={`Julia Rosenheim`} />
        </div>
        <div>
          <Credit role='Cinematographer' credit={`Nasreen Alkhateeb`} />
          <Credit role='Editor' credit={`Frances Henderson`} />
          <Credit role='Composer' credit={`Kathryn Bostic`} />
          <Credit role='Executive Producers'
            // alphabatize
            // Tonya first
            credit={
              <>
                <div>Tonya Lewis Lee</div>
                <div>
                  Tory Burch,
                  Laurie Fabiano,
                  Nina and David Fialkow,
                  Beth Kojima,
                  Melony and Adam Lewis,
                  Crystal McCrary McGuire,
                  Dr. Amelia Quist-Ogunlesi,
                  Carrie Walton Penner,
                  Brenda Robinson,
                  Danny Strong
                </div>
              </>}
          />
        </div>
      </div>

      <Divider />

      <SectionHeader>About the Filmakers</SectionHeader>
      <div className="md:grid md:grid-cols-2 gap-12 -mt-6">
        <p className="">
          <span className="font-black text-lg">Perri Peltz</span>  is an Emmy® award winning documentary filmmaker, journalist, and public health advocate. Most recently, Perri directed Surveilled with Ronan Farrow for HBO and Can’t Look Away for Bloomberg Originals with Matthew O’Neill. Perri and Matt also created the Emmy® winning documentary news series AXIOS on HBO, and directed and produced the 2019 HBO Documentary, Alternate Endings: Six New Ways to Die in America. Previously, Perri directed the HBO documentaries, Warning: This Drug May Kill You, about the opioid addiction epidemic and Risky Drinking, about alcohol use disorder. She co-directed A Conversation About Growing Up Black as part of the “Conversation on Race” series for The New York Times Op-Docs, and other films include HBO’s Remembering the Artist: Robert De Niro, Sr. and Prison Dogs. Perri hosts “The Perri Peltz Show” on SiriusXM Radio and has a Doctorate in Public Health from Columbia University. She was previously an award-winning broadcast journalist for NBC, ABC, and CNN.</p>
        <p className=""><span className="font-black text-lg">Matthew O’Neill</span> {`is an Emmy® Award winning and Academy Award® nominated documentary filmmaker and journalist. He most recently directed Can’t Look Away for Bloomberg Originals, Surveilled with Ronan Farrow for HBO and created the Emmy® winning HBO documentary news series AXIOS on HBO with Perri Peltz. Matt and Perri also directed the 2019 HBO documentary Alternate Endings: Six New Ways to Die in America. Matt has been making non-fiction films and series with Downtown Community Television Center, Inc, (DCTV) in NYC's Chinatown for the last 25 years. His earlier projects for HBO, ESPN, Disney+, Netflix and FRONTLINE have focused on everything from the Egyptian Revolution to the wars in Iraq and Afghanistan, the American criminal justice system, and the School of American Ballet. His filmmaking has taken him to more than 50 different countries for films including Baghdad ER, In Tahrir Square and Wartorn. He has received two Academy Award nominations for Redemption and China’s Unnatural Disaster: The Tears of Sichuan Province and has been recognized with two Columbia DuPont Awards, a Peabody Award, an Overseas Press Club Award, six Emmy Awards and a Director’s Guild nomination.`}</p>
      </div>

      <Divider />

      <SectionHeader>About DCTV</SectionHeader>
      <div>
        <p className="">Founded in 1972, Downtown Community Television Center, Inc. (DCTV) has grown into one of the leading documentary production and film education centers in the country. A community of and for documentary filmmakers, DCTV is a unique space where community screenings, master classes, youth education programs and affordable production resources all exist side by side with award-winning documentary work.
          DCTV’s film and television productions have been recognized with two Academy Award Nominations, 18 National Emmy Awards, four duPont-Columbia Awards, a Peabody Award, 6 New York Emmy Awards and accolades at film festivals and competitions around the world.
          Recent work includes Surveilled (HBO), the news and documentary series Axios on HBO (HBO), the Oscar shortlisted Shut up and Paint (PBS) about the artist Titus Kaphar, the six-part documentary series On Pointe (Disney+) about the NYC Ballet, the decades-spanning Cuba and the Cameraman (Netflix), Life on Parole (PBS - FRONTLINE), Alternate Endings: Six New Ways to Die in America (HBO), Finding the Way Home (HBO), and the documentary series 15: A Quinceañera Story (HBO).
          In 2022, DCTV opened a new documentary-only cinema FIREHOUSE in its landmark firehouse home in Manhattan’s Chinatown.
        </p>
      </div>

      <Divider />

      <SectionHeader>About Get to Yes</SectionHeader>
      <div>
        <p className="">Get to Yes Productions is a full service production company that brings together innovators in sports, fashion, pop culture, politics and the arts. Get to Yes captures the pulse and breadth of humanity by producing thought-provoking and impactful scripted and non-scripted content.
        </p>
      </div>
    </Section >

  );
}
