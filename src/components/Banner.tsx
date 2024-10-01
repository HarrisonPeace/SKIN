export default function Banner() {
  return (
    <div className="page-container flex flex-col items-center justify-center pb-[50px] pt-[60px]">
      <h2 className="mb-10 text-title font-semibold uppercase tracking-[0.56px]">
        <span className="font-nantes font-normal italic">Daily</span> Essentials
      </h2>

      <p className="mb-6 font-nantes text-sub-title tracking-[0.25px]">
        Finest ingredients for <span className="italic">beautiful</span> skin
      </p>

      <p className="max-w-[480px] text-center tracking-[0.16px]">
        Our skincare essentials are designed to make you look and feel your glowy, dewy best before
        you even think about makeup.
      </p>
    </div>
  )
}
