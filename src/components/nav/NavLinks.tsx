'use client'

import { useEffect, useState } from 'react'
import Link from '../common/Link'
import LinkAsButton from '../common/LinkAsButton'
import siteData from '@/data/siteData'

const NavLinks = ({ linkClass, onLinkClick, ...rest }: React.HTMLProps<HTMLElement> & { linkClass?: string, onLinkClick?: () => void }) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const offsets = siteData.routes.map(link => {
        const el = document.querySelector(`#${link.id}`)
        if (!el) return { id: link.href, offset: Infinity }
        return {
          id: link.id,
          offset: Math.abs((el as HTMLElement).getBoundingClientRect().top)
        }
      })

      const closest = offsets.reduce((prev, curr) =>
        curr.offset < prev.offset ? curr : prev
      )
      setActiveId(closest.id)
    }

    handleScroll() // run on mount
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav {...rest}>
      {siteData.routes.map((link) => {
        const isActive = activeId === link.id

        return (
          <Link
            key={link.title}
            onClick={onLinkClick}
            href={link.href}
            className={`${linkClass ?? ''} ${isActive ? 'underline underline-offset-8 decoration-primary' : ''}`}
          >
            {link.title}
          </Link>
        )
      })}
      {/* <LinkAsButton onClick={onLinkClick} className={`${linkClass ?? ''} btn-primary rounded-none`} href="https://tribecafilm.com/films/she-runs-the-world-2025" target="_blank">
        Get Tickets
      </LinkAsButton> */}
    </nav>
  )
}

export default NavLinks
