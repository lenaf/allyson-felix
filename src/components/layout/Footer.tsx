import Link from '../common/Link'
import siteData from '@/data/siteData'
import SocialIcon from '@/components/social-icons'
import Divider from '../common/Divider'
import Logo from '../common/Logo'
import DCTV from "public/images/DCTV.png"
import getToYes from "public/images/getToYesWhite.png"
import Image from "next/image"

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteData.email}`} size={6} />

        </div>
        <Divider />
        <div className="mb-2 flex p-4 justify-center items-center gap-8 space-x-2 text-sm">
          <div className='justify-self-start mr-auto'>{`© 2025 DCTV`}</div>
          <a href='https://www.dctvny.org/s/' target="_blank"> <Image height={50} src={DCTV} alt='DCTV Logo' /></a>
          <a href='https://gettoyesproductions.com/' target="_blank"><Image height={50} src={getToYes} alt='Get to Yes Logo' /></a>
        </div>
      </div>
    </footer>
  )
}
