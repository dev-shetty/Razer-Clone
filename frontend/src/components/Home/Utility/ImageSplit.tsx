import { Children } from "react"
import ImageFull from "./ImageFull"

type Props = {
  children: JSX.Element
}
function ImageSplit({ children }: Props) {
  return <div className="grid md:grid-cols-2 gap-2 last:mb-2">{children}</div>
}

export default ImageSplit
