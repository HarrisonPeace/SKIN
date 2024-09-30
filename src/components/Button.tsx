'use client'

import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  buttonStyle?: 'rounded' | 'underlined'
  buttonColor?: 'dark' | 'light'
  href?: string
  linkProps?: LinkProps
  type?: 'button' | 'submit'
  fullWidth?: boolean
  onClick?: () => void
}

export default function Button({
  children,
  fullWidth = false,
  buttonStyle = 'rounded',
  buttonColor = 'dark',
  href,
  linkProps,
  type = 'button',
  onClick,
}: ButtonProps) {
  const content = (
    <button
      type={type}
      onClick={onClick}
      className={clsx([
        'group/button',
        fullWidth ? 'flex items-center justify-center' : 'w-fit',
        buttonStyle === 'rounded' ? '' : 'text-sub-title font-nantes italic',
        buttonColor === 'dark' ? 'text-dark' : 'text-light',
      ])}
    >
      <div
        className={clsx([
          buttonStyle === 'rounded'
            ? ''
            : 'ease-out-quad transition-transform group-hover/button:translate-x-1',
        ])}
      >
        {children}
      </div>
      {buttonStyle === 'underlined' && (
        <div
          className={clsx([
            'ease-out-quad mt-2 h-[1px] w-full transition-all group-hover/button:-translate-x-1',
            buttonColor === 'dark' ? 'bg-primary' : 'bg-base-light',
          ])}
        />
      )}
    </button>
  )

  if (href) {
    return (
      <Link href={href} {...linkProps} className={fullWidth ? 'w-full' : ''}>
        {content}
      </Link>
    )
  }

  return content
}
