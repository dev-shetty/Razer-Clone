import { FaAngleRight } from "react-icons/fa"
import MySection from "./MySection"

function Footer() {
  return (
    <footer className="relative text-xs md:grid px-[5%] lg:px-[15%] bg-primary-850 text-primary-400 overflow-hidden">
      <div className="grid grid-cols-5 py-8">
        <div>
          <ul className="">
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
        <div className="hidden md:flex">
          <MySection />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:border-t-[1px] border-t-primary-400 py-4">
        <div className="flex flex-col items-center md:items-start sm:flex-row md:flex-col lg:flex-row justify-center gap-1 pb-6 md:pb-0">
          <p className="text-primary-100 md:text-primary-400">
            Copyright &copy; 2023 Razer Inc. All rights reserved
          </p>
          <div className="flex gap-1 md:gap-4">
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
        <div className="flex items-center justify-center gap-2 md:border-none border-t-[1px] border-t-primary-400 pt-6 md:pt-0 w-full md:w-max">
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
      <div className="md:hidden pb-6">
        <MySection />
      </div>
    </footer>
  )
}

export default Footer
