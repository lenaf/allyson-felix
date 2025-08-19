
import Divider from '../common/Divider'
import DCTV from "public/images/DCTV.png"
import getToYes from "public/images/getToYesWhite.png"
import together from "public/images/togethxr white logo.png"
import harnish from "public/images/harnish.png"
import artemis from "public/images/artemis.png"
import mastone from "public/images/mastone.png"
import birthFUND from "public/images/birthFUND.png"
import RWJF from "public/images/RWJF.png"

import Image from "next/image"
import { SectionHeader, SectionSubHeader } from '../common/SectionHeader'

export default function Footer() {
  return (
    <footer className='prose px-4 sm:px-8 md:px-12 py-6 leading-5	'>

      <div className="mb-2 flex p-4 justify-center items-center gap-x-8 space-x-2 text-sm flex-wrap no-prose">
        <a href='https://www.dctvny.org/s/' target="_blank"> <Image className='my-2' height={50} src={DCTV} alt='DCTV Logo' /></a>
        <a href='https://madstonecompany.com/' target="_blank"><Image className='my-2' height={50} width={40} src={mastone} alt='Madstone Logo' /></a>
        <a href='https://gettoyesproductions.com/' target="_blank"><Image className='my-2' height={50} src={getToYes} alt='Get to Yes Logo' /></a>
        <a href='https://www.togethxr.com/' target="_blank"><Image className='my-2' height={50} width={125} src={together} alt='Togethxr Logo' /></a>
        <a href='https://artemisrising.org/' target="_blank"><Image className='my-2' height={50} width={125} src={artemis} alt='Artemis Rising Foundation Loho' /></a>
        <a href='https://thehf.org/' target="_blank"><Image className='my-2' height={50} width={125} src={harnish} alt='The Harshisch Foundation Logo' /></a>
        <a href='https://www.thebirthfund.com/' target="_blank"><Image className='my-2' height={50} width={125} src={birthFUND} alt='BirthFund Logo' /></a>
        <a href='https://www.rwjf.org/' target="_blank"><Image className='my-2' height={50} width={125} src={RWJF} alt='Robert Wood Johnson Foundation Logo' /></a>

      </div>

      <div className="flex justify-center items-center text-sm">
        <div className=''>{`© 2025 DCTV`}</div>
      </div>

    </footer>

  )
}
