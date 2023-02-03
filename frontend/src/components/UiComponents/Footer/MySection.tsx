import { SiLinkedin } from "react-icons/si"
import { VscGithub } from "react-icons/vsc"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaDev } from "react-icons/fa"
import ForkMe from "../Other/ForkMe"

function MySection() {
  return (
    <div className="flex flex-col ml-auto items-center">
      <div className="flex flex-col sm:flex-row md:flex-col items-center sm:items-end md:items-center gap-2 md:gap-0 mb-1 md:mb-0">
        <p className="text-razer-green text-sm text-right">
          Built by Deveesh Shetty
        </p>
        <div className="flex gap-2 mt-2 text-razer-green text-2xl md:justify-end">
          <a
            href="https://github.com/Deveesh-Shetty"
            target="_blank"
            className=" hover:text-primary-100"
          >
            <VscGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/deveesh-shetty-908539214"
            target="_blank"
            className=" hover:text-primary-100"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://twitter.com/shettydeveesh"
            target="_blank"
            className=" hover:text-primary-100"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://dev.to/deveeshshetty1209"
            target="_blank"
            className=" hover:text-primary-100"
          >
            <FaDev />
          </a>
        </div>
      </div>
      <div className="mt-3">
        <ForkMe />
      </div>
    </div>
  )
}

export default MySection
