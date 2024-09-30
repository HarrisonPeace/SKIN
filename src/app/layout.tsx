import { Metadata } from 'next'
import localFont from 'next/font/local'
import clsx from 'clsx'
import './scss/main.scss'

const nantes = localFont({
  src: [
    { path: './fonts/NantesWeb-RegularItalic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/NantesWeb-Regular.woff2', weight: '400' },
    { path: './fonts/NantesWeb-BoldItalic.woff2', weight: '700', style: 'italic' },
  ],
  variable: '--font-nantes',
})

const redHat = localFont({
  src: [
    { path: './fonts/RedHatDisplay-Regular.woff', weight: '400' },
    { path: './fonts/RedHatDisplay-Medium.woff', weight: '500' },
    { path: './fonts/RedHatDisplay-SemiBold.woff', weight: '600' },
  ],
  variable: '--font-redhat',
})

export const metadata: Metadata = {
  title: 'SKIN',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          nantes.variable,
          redHat.variable,
          'text-body bg-light font-redhat antialiased'
        )}
      >
        {children}
      </body>
    </html>
  )
}
