import RazerBlade from "../components/Home/RazerBlade"
import RazerEdge from "../components/Home/RazerEdge"
import RazerHammerHead from "../components/Home/RazerHammerhead"

function HomePage() {
  return (
    <div className="grid gap-2 bg-primary-800">
      <RazerEdge />
      <RazerBlade />
      <RazerHammerHead />
    </div>
  )
}

export default HomePage
