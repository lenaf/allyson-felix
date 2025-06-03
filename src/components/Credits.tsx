"use client"

import Section from "@/components/common/Section";
import { SectionHeader, SectionSubHeader } from "./common/SectionHeader";
import Divider from "./common/Divider";

const Role = ({ children }) => <h4 className="text-primary uppercase">{children}</h4>
const Description = ({ children }) => <span className="ml-3 text-sm text-gray-300">{children}</span>

const Credit = ({ role, credit }) => <div className="mb-3">
  <Role>{role}</Role>
  <div className="text-lg text-gray-100"> {credit}</div>
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
          <Credit role='PRODUCED & DIRECTED BY' credit={
            <div>
              <div>{`Perri Peltz`}</div>
              <div>{`Matthew O'Neill`}</div>
            </div>
          } />
          <Credit role='PRODUCED BY' credit={`Lisa Binns`} />
          <Credit role='Co-Producer' credit={`Julia Rosenheim`} />
          <Credit role='Edited By' credit={`Frances Henderson`} />
          <Credit role='Cinematographer' credit={`Nasreen Alkhateeb`} />
          <Credit role='Editor' credit={'Bryan Chang'} />
          <Credit role='Associate Editor' credit={'Nicole Del Cioppio'} />
        </div>
        <div>
          <Credit role='Music By' credit={`Kathryn Bostic`} />
          <Credit role='Music SUPERVISOR' credit={`Jonathan Zalben`} />
          <Credit role='EXECUTIVE PRODUCED BY' credit={`Tonya Lewis Lee`} />
          <Credit role='EXECUTIVE PRODUCERS'
            credit={<>
              <div>Crystal McCrary Mcguire </div>
              <div>Beth Kojima</div>
              <div>Melony & Adam Lewis</div>
              <div>Janice Y.K. Lee & Sarah Bae</div>
              <div>Dr. Amelia Ogunlesi</div>
              <div>Carrie Walton Penner</div>
              <div>Nina Fialkow & David Fialkow</div>
              <div>Regina K. Scully</div>
              <div>Ruth Ann Harnisch</div>
              <div>Tory Burch</div>
              <div>Danny Strong</div>
              <div>Sue Bird</div>
              <div>Jessica Robertson</div>
              <div>Kayla Johnson</div>
              <div>Brenda Robinson</div>
              <div>Laurie Fabiano</div>
            </>}
          />
          <Credit role='GRAPHIC DESIGN BY' credit={`&Walsh`} />
        </div>
      </div>

      <Divider className="my-6" />

      <SectionSubHeader>About the Filmakers</SectionSubHeader>
      <div className="mb-2">
        <h4 className="uppercase text-primary">Perri Peltz</h4>
        <div className="uppercase text-gray-100">Director/Producer</div>
        <p className="mt-2">{`Perri Peltz is an Emmy® award winning documentary filmmaker, journalist, and public health advocate. Most recently, Perri directed Surveilled with Ronan Farrow for HBO and Can’t Look Away for Bloomberg Originals with Matthew O’Neill. Perri and Matt also created the Emmy® winning documentary news series AXIOS on HBO, and directed and produced the 2019 HBO Documentary, Alternate Endings: Six New Ways to Die in America. Previously, Perri directed the HBO documentaries, Warning: This Drug May Kill You, about the opioid addiction epidemic and Risky Drinking, about alcohol use disorder. She co-directed A Conversation About Growing Up Black as part of the “Conversation on Race” series for The New York Times Op-Docs, and other films include HBO’s Remembering the Artist: Robert De Niro, Sr. and Prison Dogs. Perri hosts “The Perri Peltz Show” on SiriusXM Radio and has a Doctorate in Public Health from Columbia University. She was previously an award-winning broadcast journalist for NBC, ABC, and CNN.`}</p>
      </div>

      <div className="mb-2">
        <h4 className="uppercase text-primary">MATTHEW O’NEILL</h4>
        <div className="uppercase text-gray-100">DIRECTOR / PRODUCER</div>
        <p className="mt-2">{`Matthew O’Neill is an Emmy® Award winning and Academy Award® nominated documentary filmmaker and journalist. He most recently directed Can’t Look Away for Bloomberg Originals, Surveilled with Ronan Farrow for HBO and created the Emmy® winning HBO documentary news series AXIOS on HBO with Perri Peltz. Matt and Perri also directed the 2019 HBO documentary Alternate Endings: Six New Ways to Die in America. Matt has been making non-fiction films and series with Downtown Community Television Center, Inc, (DCTV) in NYC's Chinatown for the last 25 years. His earlier projects for HBO, ESPN, Disney+, Netflix and FRONTLINE have focused on everything from the Egyptian Revolution to the wars in Iraq and Afghanistan, the American criminal justice system, and the School of American Ballet. His filmmaking has taken him to more than 50 different countries for films including Baghdad ER, In Tahrir Square and Wartorn. He has received two Academy Award nominations for Redemption and China’s Unnatural Disaster: The Tears of Sichuan Province and has been recognized with two Columbia DuPont Awards, a Peabody Award, an Overseas Press Club Award, six Emmy Awards and a Director’s Guild nomination.`}</p>
      </div>

      <div className="mb-2">
        <h4 className="uppercase text-primary">TONYA LEWIS LEE</h4>
        <div className="uppercase text-gray-100">EXECUTIVE PRODUCER </div>
        <p className="mt-2">{`Tonya Lewis Lee is an award-winning Emmy nominated director, producer, writer whose work often explores the personal impact of social justice issues.  Lee is the co-director and co-producer of the documentary film Aftershock which won both a Peabody and Dupont award for its work exploring the U.S. maternal mortality crisis and is currently streaming on HULU.  Lee’s documentary and narrative film work have premiered at the Sundance Film Festival, screened at festivals across the United States and internationally and have been seen on multiple platforms including, Netflix, HULU, Nickelodeon, Hallmark.  Tonya is a member of the Writer’s Guild of America, The Television Academy and The Producer’s guild of America where she serves as a Vice President of the Board.  She is also a member of the Board of Trustees at the March of Dimes and a senior board member of the NAACP Legal Defense and Educational Fund.  A highly sought out speaker, Tonya has been invited to speak with various community groups and corporations and has spoken at colleges and universities across the U.S. and worldwide including Yale, Harvard, Smith, Spelman and the Catholic University of Portugal.`}</p>
      </div>

      <div className="mb-2">
        <h4 className="uppercase text-primary">LISA BINNS</h4>
        <div className="uppercase text-gray-100">PRODUCER</div>
        <p className="mt-2">{`Lisa Binns has an extensive career in media production, working with notable networks and programs such as DCTV, Al Jazeera America, ESPN's "E:60," and CBS News’ “60 Minutes,” the oldest and most-watched TV newsmagazine program in history. Her career covers a wide range of work in news, documentaries, and feature production, addressing varied subjects from civil rights, sports, to both policy-driven and human-interest stories. Binns was a Senior Producer at DCTV, where she produced three seasons of the Emmy® Award-winning docu-news series Axios on HBO. Binns has also collaborated with some of the world’s most renowned journalists, including Ed Bradley, Morley Safer, and Mike Wallace, among others. Throughout her career, Binns has demonstrated a commitment to storytelling that has the potential to inspire and influence societal discourse.`} </p>
      </div>

      <div className="mb-2">
        <h4 className="uppercase text-primary">JULIA ROSENHEIM</h4>
        <div className="uppercase text-gray-100">CO-PRODUCER</div>
        <p className="mt-2">{`Julia Rosenheim has contributed to a wide range of independent films and major documentary series for platforms like HBO and Netflix. Most recently, Julia co-produced the film Can't Look Away for Bloomberg Originals, investigating the profound harms of social media on young people and the legal battles now reshaping Big Tech’s power. Julia was an associate producer on the Emmy Award-winning series Axios on HBO, and worked on the feature documentary Rudy!, which premiered at Tribeca in 2022. She also contributed to Netflix’s Emmy-nominated series Encounters, a global investigation into unexplained aerial phenomena.`}</p>
      </div>

      <div className="mb-2">
        <h4 className="uppercase text-primary">FRANCES HENDERSON</h4>
        <div className="uppercase text-gray-100">EDITOR</div>
        <p className="mt-2">{`Frances Henderson is a director and editor of documentary films. Her editing work includes the ITVS supported documentary film For Ahkeem which had its world premiere at the 2017 Berlinale and US premiere at Tribeca Film Festival, now available through Hulu, Crescendo! which premiered at Tribeca Film Festival and was nominated for a Critics Choice Award. Shut Up and Paint which was short listed for an Academy Award and One Good Reason, which won Best Short Documentary and Best Social Impact film at Tribeca X Awards. Her most recent directed film This Much We Know, based on the book About a Mountain by John D’agata, was supported with grants from Cinereach and The Jerome Foundation, screened at CIFF, DocNYC, Big Sky Film Festival and is being distributed by Oscilloscope Laboratories.`}</p>
      </div>

      <div className="mb-2">
        <h4 className="uppercase text-primary">NASREEN ALKHATEEB</h4>
        <div className="uppercase text-gray-100">DIRECTOR OF PHOTOGRAPHY</div>
        <p className="mt-2">{`Nasreen Alkhateeb is an award winning cinematographer whose work illuminates historically excluded voices by normalizing intersectional storytelling. By centering racial injustice, disability inequity, marginalized genders, stigmatized sexual identities, the first woman VP, and the largest telescope NASA has ever constructed, Nasreen thrives as a leader in films that shift our culture. Her ability to motivate audiences is a direct result of approaching each story through intersectional identities. Based in Los Angeles California, Nasreen was born in Oakland California, and raised in Northern Virginia outside of Washington D.C. She holds a degree in Fine Arts from Pratt Institute in Brooklyn, New York. Her lens has captured Kamala Harris’ Vice Presidential campaign, the Emmy award series Uncomfortable Conversations with a Black Man, Netflix’s Unknown Cosmic Time Machine, Netflix’s Supreme Models: Iconic Black Women Who Revolutionized Fashion, Apple’s Dear episode with Billy Porter, and feature film She Runs the World at the Tribeca Film Festival. In addition to lensing scripted films centering Black, Queer, and Disabled lead characters, her credits include NASA, United Nations, Microsoft, and the Women’s March. Supported by the Sundance Institute, the American Society of Cinematographers, the Ford Foundation, the Center for Cultural Power, GettyImages, Women In Film, American Film Institute Conservatory. Forbes described her as “breaking barriers.”`}</p>
      </div>

      <div>Complete filmmaker bios in progress.</div>

      <Divider className="my-6" />

      <SectionSubHeader>About DCTV</SectionSubHeader>
      <div>
        <p className="">Founded in 1972, Downtown Community Television Center, Inc. (DCTV) has grown into one of the leading documentary production and film education centers in the country. A community of and for documentary filmmakers, DCTV is a unique space where community screenings, master classes, youth education programs and affordable production resources all exist side by side with award-winning documentary work.
          DCTV’s film and television productions have been recognized with two Academy Award Nominations, 18 National Emmy Awards, four duPont-Columbia Awards, a Peabody Award, 6 New York Emmy Awards and accolades at film festivals and competitions around the world.
          Recent work includes Surveilled (HBO), the news and documentary series Axios on HBO (HBO), the Oscar shortlisted Shut up and Paint (PBS) about the artist Titus Kaphar, the six-part documentary series On Pointe (Disney+) about the NYC Ballet, the decades-spanning Cuba and the Cameraman (Netflix), Life on Parole (PBS - FRONTLINE), Alternate Endings: Six New Ways to Die in America (HBO), Finding the Way Home (HBO), and the documentary series 15: A Quinceañera Story (HBO).
          In 2022, DCTV opened a new documentary-only cinema FIREHOUSE in its landmark firehouse home in Manhattan’s Chinatown.
        </p>
      </div>

      <Divider className="my-6" />

      <SectionSubHeader>About Get to Yes</SectionSubHeader>
      <div>
        <p className="">Get to Yes Productions is a full service production company that brings together innovators in sports, fashion, pop culture, politics and the arts. Get to Yes captures the pulse and breadth of humanity by producing thought-provoking and impactful scripted and non-scripted content.
        </p>
      </div>
    </Section >

  );
}
