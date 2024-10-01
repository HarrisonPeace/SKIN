import Button from './Button'

export default function Hero() {
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-light bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(hero.webp)' }}
    >
      <h1 className="flex flex-col items-center justify-center text-title font-semibold uppercase text-light">
        <div>
          Be the <span className="font-nantes font-normal italic">energy</span>
        </div>
        <div>
          you want to <span className="font-nantes font-normal italic">attract</span>
        </div>
      </h1>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Button buttonColor="light" buttonStyle="underlined">
          Shop the range
        </Button>
      </div>
    </div>
  )
}
