import Link from 'next/link'
import Logo from '../Logo'
import CartLink from './CartLink'
import clsx from 'clsx'

export default function Header() {
  const navLinks = [
    { text: 'Shop', href: '#' },
    { text: 'About', href: '#' },
    { text: 'Our Farmers', href: '#' },
    { text: 'Ingredients', href: '#' },
    { text: 'Account', href: '#', pushRight: true },
  ]

  return (
    <div className="fixed left-0 top-0 z-50 w-screen">
      <header className="page-container text-small flex items-center justify-center gap-10 font-semibold uppercase tracking-wider text-light">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={clsx(
              ['py-[var(--nav-link-padding)] transition-opacity hover:opacity-70'],
              link.pushRight && 'ml-auto'
            )}
          >
            {link.text}
          </Link>
        ))}

        <CartLink />

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 transform">
          <Logo />
        </Link>
      </header>
    </div>
  )
}
