import { useState } from "react"
import { FaAngleRight } from "react-icons/fa"
import useScreenResize from "../../../hooks/useScreenResize"
import MySection from "./MySection"

function Footer() {
  const { screenWidth } = useScreenResize()
  const [isActive, setIsActive] = useState(0)

  return (
    <footer className="relative text-xs md:grid px-[5%] lg:px-[15%] bg-primary-850 text-primary-400 overflow-hidden">
      <div className="flex flex-col md:grid md:grid-cols-5 py-8">
        <div>
          <ul>
            <li className="title">Shop</li>
            {(screenWidth >= 768 || isActive === 1) && (
              <div>
                <li>RazerStores</li>
                <li>RazerCafe</li>
                <li>Store Locator</li>
                <li>Purchase Programs</li>
                <li>Education</li>
                <li>Exclusives</li>
                <li>RazerStore Rewards</li>
                <li>Newsletter</li>
              </div>
            )}
          </ul>
          <p
            className="md:hidden absolute right-0 top-2 cursor-pointer text-2xl font-bold hover:text-razer-green transition-colors"
            onClick={() => setIsActive((prev) => (prev === 1 ? 0 : 1))}
          >
            {isActive === 1 ? "-" : "+"}
          </p>
        </div>
        <div>
          <ul>
            <li className="title">Explore</li>
            {(screenWidth >= 768 || isActive === 2) && (
              <div>
                <li>Technology</li>
                <li>Chroma RGB</li>
                <li>Concepts</li>
                <li>Esports</li>
                <li>Collabs</li>
              </div>
            )}
          </ul>
          <p
            className="md:hidden absolute right-0 top-2 cursor-pointer text-2xl font-bold hover:text-razer-green transition-colors"
            onClick={() => setIsActive((prev) => (prev === 2 ? 0 : 2))}
          >
            {isActive === 2 ? "-" : "+"}
          </p>
        </div>
        <div>
          <ul>
            <li className="title">Support</li>
            {(screenWidth >= 768 || isActive === 3) && (
              <div>
                <li>Get Help</li>
                <li>Registration & Warranty</li>
                <li>RazerStore Support</li>
                <li>RazerCare</li>
                <li>Manage Razer ID</li>
                <li>Support Videos</li>
                <li>Accessibility Statement</li>
              </div>
            )}
          </ul>
          <p
            className="md:hidden absolute right-0 top-2 cursor-pointer text-2xl font-bold hover:text-razer-green transition-colors"
            onClick={() => setIsActive((prev) => (prev === 3 ? 0 : 3))}
          >
            {isActive === 3 ? "-" : "+"}
          </p>
        </div>
        <div>
          <ul>
            <li className="title">Company</li>
            {(screenWidth >= 768 || isActive === 4) && (
              <div>
                <li>About Us</li>
                <li>Careers</li>
                <li>Press Room</li>
                <li>ZVentures</li>
                <li>Contact Us</li>
              </div>
            )}
          </ul>
          <p
            className="md:hidden absolute right-0 top-2 cursor-pointer text-2xl font-bold hover:text-razer-green transition-colors"
            onClick={() => setIsActive((prev) => (prev === 4 ? 0 : 4))}
          >
            {isActive === 4 ? "-" : "+"}
          </p>
        </div>
        <div className="hidden md:flex">
          <MySection />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:border-t-[1px] border-t-primary-400 py-4">
        <div className="flex flex-col items-center md:items-start sm:flex-row md:flex-col lg:flex-row justify-center gap-1 pb-6 md:pb-0">
          <p className="text-primary-100 md:text-primary-400">
            Copyright &copy; 2023 Razer Inc. All rights reserved
          </p>
          <div className="flex text-center gap-1 md:gap-4 mt-2 md:mt-0">
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
        <div className="flex items-center justify-center gap-2 md:border-none border-t-[1px] border-t-primary-200 pt-6 md:pt-0 w-full md:w-max">
          <div className="flex gap-2">
            <p className="text-primary-100">India</p>
            <p className="text-primary-100">|</p>
          </div>
          <div className="flex items-center hover:text-primary-100 hover:underline cursor-pointer">
            <p>Change Location</p>
            <FaAngleRight />
          </div>
        </div>
      </div>
      <div className="md:hidden pb-6">
        <MySection />
      </div>
    </footer>
  )
}

export default Footer
