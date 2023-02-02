import { FaAngleRight } from "react-icons/fa"
import { SiLinkedin } from "react-icons/si"
import { VscGithub } from "react-icons/vsc"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaDev } from "react-icons/fa"
import ForkMe from "../Other/ForkMe"

function Footer() {
  return (
    <footer className="relative text-xs hidden md:grid px-[5%] lg:px-[15%] bg-primary-850 text-primary-400 overflow-hidden">
      <div className="grid grid-cols-5 py-8">
        <div>
          <ul>
            <li className="title">Shop</li>
            <li>RazerStores</li>
            <li>RazerCafe</li>
            <li>Store Locator</li>
            <li>Purchase Programs</li>
            <li>Education</li>
            <li>Exclusives</li>
            <li>RazerStore Rewards</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="title">Explore</li>
            <li>Technology</li>
            <li>Chroma RGB</li>
            <li>Concepts</li>
            <li>Esports</li>
            <li>Collabs</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="title">Support</li>
            <li>Get Help</li>
            <li>Registration & Warranty</li>
            <li>RazerStore Support</li>
            <li>RazerCare</li>
            <li>Manage Razer ID</li>
            <li>Support Videos</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="title">Company</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Room</li>
            <li>ZVentures</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col ml-auto">
          <p className="text-razer-green text-sm text-right">
            Built by Deveesh Shetty
          </p>
          <div className="flex gap-2 mt-2 text-razer-green text-2xl justify-end">
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
          <div className="mt-3">
            <ForkMe />
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t-[1px] border-t-primary-400 py-4">
        <div className="flex flex-col lg:flex-row gap-2 md:gap-1  ">
          <p>Copyright &copy; 2023 Razer Inc. All rights reserved</p>
          <div className="flex gap-4">
            <p className="hover:text-primary-100 hover:underline cursor-pointer">
              Site Map
            </p>
            <p>|</p>
            <p className="hover:text-primary-100 hover:underline cursor-pointer">
              Legal Terms
            </p>
            <p>|</p>
            <p className="hover:text-primary-100 hover:underline cursor-pointer">
              Privacy Policy
            </p>
            <p>|</p>
            <p className="hover:text-primary-100 hover:underline cursor-pointer">
              Cookie Policy
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
          <div className="flex gap-2">
            <p className="text-primary-100">United States</p>
            <p className="text-primary-100">|</p>
          </div>
          <div className="flex items-center hover:text-primary-100 hover:underline cursor-pointer">
            <p>Change Location</p>
            <FaAngleRight />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
