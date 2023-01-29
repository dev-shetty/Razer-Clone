import ImageFull from "./Utility/ImageFull"

function RazerEnkiPro() {
  return (
    <div>
      <ImageFull
        product="razer-enki-pro"
        title="Razer Enki Pro"
        subtitle="Automobili Lamborghini Edition"
        links={["Learn More", "Buy"]}
        isSmallGrid
        label={
          <div className="uppercase bg-[#ff9c07] text-primary-900 pt-1 px-4 font-extrabold mb-2 -mt-4">
            <p>Razer.com</p>
            <p>Exclusive</p>
          </div>
        }
      />
    </div>
  )
}

export default RazerEnkiPro
