
import Divider from '../common/Divider'
import DCTV from "public/images/DCTV.png"
import getToYes from "public/images/getToYesWhite.png"
import together from "public/images/togethxr white logo.png"
import harnish from "public/images/harnish.png"
import artemis from "public/images/artemis.png"
import mastone from "public/images/mastone.png"

import Image from "next/image"

export default function Footer() {
  return (
    <div>
      <Divider className='my-4' />

      <div className='prose px-4 sm:px-8 md:px-12 py-12 leading-5 flex flex-col md:grid md:grid-cols-2 gap-12 '>
        <div >
          <h2 className='uppercase text-primary text-xl mb-2'>Press Contact</h2>
          <div className="text-gray-100 text-lg mb-1">Lana Iny </div>
          <div className="m-0">Downtown Community Television Center  </div>
          <div className="">87 Lafayette Street </div>
          <div className=" mb-2">New York, NY 10013</div>
          <a href="tel:9179924794" className=" underline hover:text-primary transition block" >
            (917) 992-4794
          </a>
          <a href="mailto:lanainy@gmail.com" className=" underline hover:text-primary transition block">
            lanainy@gmail.com
          </a>
        </div>

        <div>
          <h2 className='uppercase text-primary text-xl mb-1'>Worldwide Sales</h2>
          <div className="text-gray-100 text-lg mb-2">The Film Sales Company </div>
          <div className="">Andrew Herwitz, President </div>
        </div>

      </div>

      <Divider className='my-4' />
      <footer className='prose px-4 sm:px-8 md:px-12 py-6 leading-5	'>

        <div className="mb-2 flex p-4 justify-center items-center gap-8 space-x-2 text-sm">
          <a href='https://www.dctvny.org/s/' target="_blank"> <Image height={50} src={DCTV} alt='DCTV Logo' /></a>
          <a href='https://gettoyesproductions.com/' target="_blank"><Image height={50} src={getToYes} alt='Get to Yes Logo' /></a>
          <a href='https://www.togethxr.com/' target="_blank"><Image height={50} width={125} src={together} alt='Togethxr Logo' /></a>
          <a href='https://artemisrising.org/' target="_blank"><Image height={50} width={125} src={artemis} alt='Artemis Rising Foundation Loho' /></a>
          <a href='https://thehf.org/' target="_blank"><Image height={50} width={125} src={harnish} alt='The Harshisch Foundation Logo' /></a>
          <a href='' target="_blank"><Image height={50} width={40} src={mastone} alt='Madstone Logo' /></a>
        </div>

        <div className="flex justify-center items-center text-sm">
          <div className=''>{`© 2025 DCTV`}</div>
        </div>

      </footer>
    </div>

  )
}
