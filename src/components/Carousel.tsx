'use client'

import { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide, SwiperCore } from 'swiper/react'
import Image from 'next/image'
import clsx from 'clsx'

import Button from './Button'

import 'swiper/css'

const transitionStyles = 'transition-all duration-300 ease-out-quad'

const slides = [
  {
    img: 'glow-milk.webp',
    alt: 'Benga Goat Glow Milk Hydrating Cleanser bottle and packaging. The green packaging displays the product name with gold accents and the Benga logo.',
    hoverImg: 'hover.webp',
    product: 'goat glow milk',
    description: 'Gently cleanses oil',
    price: 60,
  },
  {
    img: 'honey-elixir.webp',
    alt: 'Benga Goat Glow Milk Hydrating Cleanser bottle and packaging. The green packaging displays the product name with gold accents and the Benga logo.',
    hoverImg: 'hover.webp',
    product: 'royal raw honey elixir',
    description: 'Restore radiance',
    price: 120,
  },
  {
    img: 'glow-milk.webp',
    alt: 'Benga Goat Glow Milk Hydrating Cleanser bottle and packaging. The green packaging displays the product name with gold accents and the Benga logo.',
    hoverImg: 'hover.webp',
    product: 'tallow peptide cloud cream ',
    description: 'Glow Complexion',
    price: 90,
  },
  {
    img: 'glow-milk.webp',
    alt: 'Benga Goat Glow Milk Hydrating Cleanser bottle and packaging. The green packaging displays the product name with gold accents and the Benga logo.',
    hoverImg: 'hover.webp',
    product: 'goat glow milk',
    description: 'Gently cleanses oil',
    price: 60,
  },
  {
    img: 'honey-elixir.webp',
    alt: 'Benga Goat Glow Milk Hydrating Cleanser bottle and packaging. The green packaging displays the product name with gold accents and the Benga logo.',
    hoverImg: 'hover.webp',
    product: 'royal raw honey elixir',
    description: 'Restore radiance',
    price: 120,
  },
  {
    img: 'glow-milk.webp',
    alt: 'Benga Goat Glow Milk Hydrating Cleanser bottle and packaging. The green packaging displays the product name with gold accents and the Benga logo.',
    hoverImg: 'hover.webp',
    product: 'tallow peptide cloud cream ',
    description: 'Glow Complexion',
    price: 90,
  },
]

export default function Carousel() {
  const [loaded, setLoaded] = useState(false)
  const swiperRef = useRef<SwiperCore | null>(null)

  useEffect(() => {
    setLoaded(true)
    setTimeout(() => {
      // swiperRef.current.updateAutoHeight()
    }, 0)
  }, [])

  return (
    <div className="page-container">
      <div className={loaded ? '' : 'hidden'}>
        <Swiper
          spaceBetween={8}
          slidesPerView={3}
          grabCursor
          onInit={(core: SwiperCore) => {
            swiperRef.current = core
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={clsx([
                  transitionStyles,
                  'group/slide relative rounded-md bg-dark pt-16 focus-within:pt-1 hover:pt-1',
                ])}
              >
                <Image
                  src={`/products/${slide.img}`}
                  alt={slide.alt}
                  width="456"
                  height="461"
                  className={clsx([
                    transitionStyles,
                    'mx-auto group-focus-within/slide:translate-y-[60px] group-focus-within/slide:opacity-0 group-hover/slide:translate-y-[60px] group-hover/slide:opacity-0',
                  ])}
                />
                <div className="relative z-10 px-6 pt-9">
                  <div
                    className={clsx([
                      transitionStyles,
                      'flex items-center justify-between pb-6 text-dark group-focus-within/slide:pb-5 group-focus-within/slide:text-light group-hover/slide:pb-5 group-hover/slide:text-light',
                    ])}
                  >
                    <div>
                      <p className="font-medium uppercase">{slide.product}</p>
                      <p className="text-small italic">{slide.description}</p>
                    </div>
                    <p>${slide.price}</p>
                  </div>

                  <div
                    className={clsx([
                      transitionStyles,
                      'h-0 overflow-hidden pb-0 pt-0 transition-all group-focus-within/slide:h-[60px] group-focus-within/slide:pb-6 group-hover/slide:h-[60px] group-hover/slide:pb-6',
                    ])}
                  >
                    <Button
                      buttonColor="light"
                      buttonStyle="rounded"
                      fullWidth
                      onClick={() => console.log('Added to cart')}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div
                  className={clsx([
                    transitionStyles,
                    'absolute left-0 top-0 h-full w-full rounded-md bg-cover bg-center bg-no-repeat opacity-0 group-focus-within/slide:opacity-100 group-hover/slide:opacity-100',
                  ])}
                  style={{ backgroundImage: `url(/products/${slide.hoverImg})` }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={clsx(['h-[800px]', loaded && 'hidden'])}></div>

      <div className="flex items-center justify-center pb-[60px] pt-[50px]">
        <Button buttonColor="dark" buttonStyle="underlined">
          Shop the range
        </Button>
      </div>
    </div>
  )
}
