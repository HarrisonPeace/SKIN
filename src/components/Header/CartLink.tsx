'use client'

import { useState } from 'react'

export default function CartLink() {
  const [cartCount] = useState(0)
  const onClick = () => console.log('OPEN CART')

  return (
    <button
      className="py-[var(--nav-link-padding)] uppercase tracking-wider transition-opacity hover:opacity-70"
      onClick={onClick}
    >
      Cart ({cartCount})
    </button>
  )
}
