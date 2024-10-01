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
        fullWidth ? 'flex w-full items-center justify-center' : 'w-fit',
        buttonStyle === 'rounded'
          ? 'rounded-[40px] border px-4 py-2 transition-all hover:border-secondary hover:bg-secondary hover:text-dark'
          : 'font-nantes text-sub-title italic',
        buttonColor === 'dark' ? 'border-primary text-dark' : 'border-base-light text-light',
      ])}
    >
      <div
        className={clsx(
          buttonStyle === 'rounded' &&
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
