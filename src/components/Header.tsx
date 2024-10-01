'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import Logo from './Logo'

const headerHeight = 54

const navLinks = [
  { text: 'Shop', href: '#' },
  { text: 'About', href: '#' },
  { text: 'Our Farmers', href: '#' },
  { text: 'Ingredients', href: '#' },
  { text: 'Account', href: '#', pushRight: true },
]

const colorTransitionStyles = 'transition-colors duration-500 ease-out-quad'

export default function Header() {
  // * Header Transition Logic
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isPastThreshold, setIsPastThreshold] = useState(false) // Used for transform styles
  const [isPastThresholdDelay, setIsPastThresholdDelay] = useState(false) // Used for transition styles (delayed so that not all transitions are seen)
  const [isPastThresholdColors, setIsPastThresholdColors] = useState(false) // Used for color styles

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY

      if (currentScrollTop > headerHeight) {
        // When scroll is under header height

        setIsPastThreshold(true)
        setIsPastThresholdColors(true)

        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
          setIsPastThresholdDelay(true)
        }, 100)

        if (currentScrollTop > lastScrollTop) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      } else if (currentScrollTop === 0) {
        // When scroll is at top

        setIsPastThreshold(false)

        clearTimeout(timeoutRef.current)
        setIsPastThresholdDelay(false)

        setIsVisible(true)
      } else {
        // When scroll is between header height and top

        setIsPastThresholdColors(false)
      }

      setLastScrollTop(currentScrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])

  // * Cart Logic
  const [cartCount] = useState(0)

  return (
    <div
      className={clsx(
        'left-0 top-0 z-50 w-full',
        isPastThreshold ? 'fixed' : 'absolute',
        isPastThresholdDelay && 'transition-transform duration-300',
        isPastThreshold && !isVisible ? '-translate-y-full' : 'translate-y-0',
        isPastThresholdColors && 'bg-secondary'
      )}
      style={{ height: `${headerHeight}px` }}
    >
      <div className={clsx(colorTransitionStyles, isPastThresholdColors && 'bg-secondary')}>
        <header
          className={clsx(
            isPastThresholdColors ? 'text-dark' : 'text-light',
            colorTransitionStyles,
            'page-container flex items-center justify-center gap-10 text-small font-semibold uppercase tracking-[0.7px]'
          )}
        >
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={clsx(
                ['py-[var(--nav-link-padding)] transition-opacity hover:opacity-60'],
                link.pushRight && 'ml-auto'
              )}
            >
              {link.text}
            </Link>
          ))}

          <button className="py-[var(--nav-link-padding)] uppercase tracking-[0.7px] transition-opacity hover:opacity-60">
            Cart ({cartCount})
          </button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 transform">
            <Logo
              className={clsx(colorTransitionStyles, isPastThresholdColors ? 'fill-primary' : '')}
            />
          </Link>
        </header>
      </div>
    </div>
  )
}
