export default function Banner() {
  return (
    <div className="page-container flex flex-col items-center justify-center pb-[50px] pt-[60px]">
      <h2 className="text-title mb-10 font-semibold uppercase tracking-[0.56px]">
        <span className="font-nantes font-normal">Daily</span> Essentials
      </h2>

      <p className="text-sub-title mb-6 tracking-[0.25px]">
        Finest ingredients for <span className="italic">beautiful</span> skin
      </p>

      <p className="tracking-[0.16px]">
        Our skincare essentials are designed to make you look and feel your glowy, dewy best before
        you even think about makeup.
      </p>
    </div>
  )
}
