"use client"

import { useEffect, useState } from 'react';
import Banner from '../common/Banner';
import Link from '../common/Link'
import Logo from '../common/Logo'
import MobileNav from '../nav/MobileNav';
import NavLinks from '../nav/NavLinks';
import LinkAsButton from '../common/LinkAsButton';


const Header = () => {
  // const [scrolled, setScrolled] = useState(false)

  // useEffect(() => {
  //   const onScroll = () => setScrolled(window.scrollY > 10)
  //   window.addEventListener('scroll', onScroll)
  //   return () => window.removeEventListener('scroll', onScroll)
  // }, [])

  return (
    <header
      className={`sticky top-0 w-full z-10 transition-colors duration-300 bg-base-100 shadow-md' }`}
    // : 'bg-gradient-to-b from-base-100 from-30% to-transparent'

    >
      {/* <Banner className="text-xs">
        <div >WORLD PREMIERE</div>
        <div>TRIBECA FESTIVAL</div>
        <LinkAsButton className="h-6 min-h-6 gap-2 shadow-none btn-primary p-0" href="https://tribecafilm.com/films/she-runs-the-world-2025" target="_blank">
          <span className="=">Tickets</span>
          <span aria-hidden="true">&rarr;</span>
        </LinkAsButton>
      </Banner> */}

      <div className="h-24 px-4 sm:px-8 md:px-12 flex items-center justify-between uppercase">
        <Link href="/" className='w-96'>
          <h1> <Logo className='w-full' /></h1>
        </Link>

        <div className="desktop">
          <NavLinks linkClass='text-lg' className="flex items-center gap-4 md:gap-8" />
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
