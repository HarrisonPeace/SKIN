import { Metadata } from 'next'
import localFont from 'next/font/local'
import clsx from 'clsx'
import './scss/main.scss'

// Nantes
const nantesRegular = localFont({
  src: './fonts/NantesWeb-Regular.woff2',
  variable: '--font-nantes-regular',
  weight: '400',
})

const nantesBoldItalic = localFont({
  src: './fonts/NantesWeb-BoldItalic.woff2',
  variable: '--font-nantes-bolditalic',
  weight: '700',
})

// Red Hat Display
const redHatRegular = localFont({
  src: './fonts/RedHatDisplay-Regular.woff',
  variable: '--font-redhat-regular',
  weight: '400',
})

const redHatMedium = localFont({
  src: './fonts/RedHatDisplay-Medium.woff',
  variable: '--font-redhat-medium',
  weight: '500',
})

const redHatSemibold = localFont({
  src: './fonts/RedHatDisplay-SemiBold.woff',
  variable: '--font-redhat-semibold',
  weight: '600',
})

export const metadata: Metadata = {
  title: 'SKIN',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          nantesRegular.variable,
          nantesBoldItalic.variable,
          redHatRegular.variable,
          redHatMedium.variable,
          redHatSemibold.variable,
          'bg-light antialiased'
        )}
      >
        {children}
      </body>
    </html>
  )
}
