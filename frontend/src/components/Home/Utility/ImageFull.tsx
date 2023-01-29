import { FaAngleRight } from "react-icons/fa"

type Props = {
  product: string
  timer?: string
  title: string
  subtitle: string
  links: string[]
  isSmallGrid?: boolean
  label?: JSX.Element
}

function ImageFull({
  product,
  timer,
  title,
  subtitle,
  links,
  isSmallGrid,
  label,
}: Props) {
  return (
    <div className="flex justify-center">
      <div
        className={`absolute ${
          isSmallGrid ? "my-8" : "my-16"
        } py-4 text-primary-100 mx-auto`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col gap-1">
            <h2
              className={`${
                isSmallGrid ? "text-2xl md:text-4xl" : "text-3xl md:text-5xl"
              } uppercase font-bold`}
            >
              {title}
            </h2>
            <h3
              className={`${
                isSmallGrid ? "text-base md:text-lg" : " text-xl md:text-2xl"
              } uppercase px-8 opacity-90`}
            >
              {subtitle}
            </h3>
          </div>
          {/* Timer is Optional */}
          {timer && (
            <div className="timer mt-1">
              <p className="uppercase text-2xl font-bold">{timer}</p>
            </div>
          )}
          <div className="links flex gap-8 mt-4">
            {links.map((link, index) => (
              <div
                className={`flex items-center ${
                  isSmallGrid ? "" : "md:text-xl"
                }`}
                key={index}
              >
                <p className="opacity-90">{link}</p>
                <div className="text-razer-green">
                  <FaAngleRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${product} bg-image ${
          isSmallGrid ? "h-[60vh]" : "h-[75vh]"
        } overflow-hidden w-full`}
      ></div>
    </div>
  )
}

export default ImageFull