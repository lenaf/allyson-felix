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
      <Banner className="text-xs">
        <div className="font-bold">WORLD PREMIERE</div>
        <div>2025 TRIBECA FILM FESTIVAL</div>
        <div>JUNE 5</div>
        <LinkAsButton className="h-6 min-h-6 gap-2 shadow-none btn-primary" href="https://tribecafilm.com/films/she-runs-the-world-2025" target="_blank">
          <span className="=">Tickets</span>
          <span aria-hidden="true">&rarr;</span>
        </LinkAsButton>
      </Banner>

      <div className="h-20 px-8 flex items-center justify-between uppercase">
        <Link href="/">
          <Logo width={200} />
        </Link>
        <div className="desktop">
          <NavLinks className="flex items-center gap-4 md:gap-8" />
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
