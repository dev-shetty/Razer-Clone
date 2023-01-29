import ChooseYourBlade from "../components/Home/ChooseYourBlade"
import NewYearSpecial from "../components/Home/NewYearSpecial"
import RazerBlade from "../components/Home/RazerBlade"
import RazerEdge from "../components/Home/RazerEdge"
import RazerEnkiPro from "../components/Home/RazerEnkiPro"
import RazerHammerHead from "../components/Home/RazerHammerhead"
import RazerLeviathan from "../components/Home/RazerLeviathan"
import RazerNaga from "../components/Home/RazerNaga"
import RazerStoreOrlando from "../components/Home/RazerStoreOrlando"
import ImageSplit from "../components/Home/Utility/ImageSplit"

function HomePage() {
  return (
    <div className="grid gap-2 bg-primary-800">
      <RazerEdge />
      <RazerBlade />
      <RazerHammerHead />
      <ImageSplit>
        <>
          <NewYearSpecial />
          <RazerEnkiPro />
        </>
      </ImageSplit>
      <ImageSplit>
        <>
          <RazerNaga />
          <RazerStoreOrlando />
        </>
      </ImageSplit>
      <ImageSplit>
        <>
          <RazerLeviathan />
          <ChooseYourBlade />
        </>
      </ImageSplit>
    </div>
  )
}

export default HomePage
