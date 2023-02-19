import Image from 'next/image'
import clsx from 'clsx'

import homeScreen from '@/images/home-screen.png'
import teamScreen from '@/images/team-screen.png'

export function PhoneFrame({
  className,
  screen,
  children,
  priority = false,
  ...props
}) {
  return (
    <div className={clsx('relative aspect-[366/729]', className)} {...props}>
      <div className="absolute z-0" />
      <div className="absolute z-0">
        {children}
      </div>
      <Image
        src={screen === 'home' ? homeScreen : teamScreen}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full"
        unoptimized
        priority={priority}
      />
    </div>
  )
}
