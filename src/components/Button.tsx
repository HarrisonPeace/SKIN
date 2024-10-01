import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

import tw from '@/lib/tw'

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
  const getButtonClasses = () => {
    const defaultClasses = tw`group/button`
    const fullWidthClasses = fullWidth ? tw`flex w-full items-center justify-center` : tw`w-fit`
    const defaultColorClasses = buttonColor === 'dark' ? tw`text-dark` : tw`text-light`
    let styleClasses = ''

    switch (buttonStyle) {
      case 'rounded':
        styleClasses = clsx(
          tw`rounded-[40px] border px-4 py-2 text-xs uppercase transition-all hover:border-secondary hover:bg-secondary hover:text-dark`,
          buttonColor === 'dark' ? tw`border-primary` : tw`border-base-light`
        )
        break

      case 'underlined':
        styleClasses = tw`font-nantes text-sub-title italic`
        break

      default:
        // This should never occur
        break
    }

    return clsx(defaultClasses, defaultColorClasses, fullWidthClasses, styleClasses)
  }

  const content = (
    <button type={type} onClick={onClick} className={getButtonClasses()}>
      <div
        className={clsx(
          buttonStyle === 'underlined' &&
            'transition-transform ease-out-quad group-hover/button:translate-x-1'
        )}
      >
        {children}
      </div>

      {buttonStyle === 'underlined' && (
        <div
          className={clsx([
            'mt-2 h-[1px] w-full transition-all ease-out-quad group-hover/button:-translate-x-1',
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
