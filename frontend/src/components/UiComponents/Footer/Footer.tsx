import { FaAngleLeft } from "react-icons/fa"
import { SiLinkedin } from "react-icons/si"
import { VscGithub } from "react-icons/vsc"
import { TiSocialTwitterCircular } from "react-icons/ti"
import { FaDev } from "react-icons/fa"

function Footer() {
  return (
    <footer>
      <div>
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
        <div>
          <p>FOR GAMERS, BY GAMERS.&trade;</p>
          <div className="text-razer-green text-xl">
            <VscGithub />
            <SiLinkedin />
            <TiSocialTwitterCircular />
            <FaDev />
          </div>
        </div>
      </div>
      <div>
        <p>Copyright &copy; 2023 Razer Inc. All rights reserved</p>
        <div>
          <p>Site Map</p>
          <p>Legal Terms</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div>
          <p>United States</p>
          <div>
            <p>Change Location</p>
            <FaAngleLeft />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
