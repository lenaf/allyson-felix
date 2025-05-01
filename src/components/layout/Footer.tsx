import Link from '../common/Link'
import siteData from '@/data/siteData'
import SocialIcon from '@/components/social-icons'
import Divider from '../common/Divider'
import Logo from '../common/Logo'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteData.email}`} size={6} />
        </div>
        <Divider />
        <div className="mb-2 flex gap-8 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Logo width={100} />
          <div>{`©2025`}</div>
        </div>
      </div>
    </footer>
  )
}
