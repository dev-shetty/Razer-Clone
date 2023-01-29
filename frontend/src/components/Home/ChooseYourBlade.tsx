import ImageFull from "./Utility/ImageFull"

function ChooseYourBlade() {
  return (
    <div>
      <ImageFull
        product="choose-your-blade"
        title="Choose Your Blade"
        subtitle="Rediscover our 2022 line-up"
        links={["Shop Blade 14", "Shop Blade 15 & 17"]}
        isSmallGrid
      />
    </div>
  )
}

export default ChooseYourBlade
