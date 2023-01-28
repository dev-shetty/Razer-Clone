import { FaAngleRight } from "react-icons/fa"

type Props = {
  product: string
  timer?: string
  title: string
  subtitle: string
  links: string[]
}

function ImageFull({ product, timer, title, subtitle, links }: Props) {
  return (
    <div>
      <div className="absolute w-full my-16 py-4 text-primary-100">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl md:text-5xl uppercase font-bold">
              {title}
            </h2>
            <h3 className="text-xl md:text-2xl uppercase px-8">{subtitle}</h3>
          </div>
          {/* Timer is Optional */}
          {timer && (
            <div className="timer mt-1">
              <p className="uppercase text-2xl font-bold">{timer}</p>
            </div>
          )}
          <div className="links flex gap-8 mt-4">
            {links.map((link) => (
              <div className="flex items-center md:text-xl">
                <p>{link}</p>
                <div className="text-razer-green">
                  <FaAngleRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${product} bg-image h-[75vh] overflow-hidden`}></div>
    </div>
  )
}

export default ImageFull
