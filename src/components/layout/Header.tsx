"use client"

import { useEffect, useState } from 'react';
import Banner from '../common/Banner';
import Link from '../common/Link'
import Logo from '../common/Logo'
import MobileNav from '../nav/MobileNav';
import NavLinks from '../nav/NavLinks';


const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 w-full z-10 transition-colors duration-300 ${scrolled
        ? 'bg-base-100 shadow-md'
        : 'bg-gradient-to-b from-base-100 from-10% to-transparent'
        }`}
    >
      <Banner className="text-xs">
        <div className="mr-4 font-bold">WORLD PREMIER</div>
        <div className="mr-4">2025 TRIBECA FILM FESTIVAL</div>
        <div>JUNE 4-15</div>
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
