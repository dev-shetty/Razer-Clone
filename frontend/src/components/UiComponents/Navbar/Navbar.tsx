import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import Notification from "../Notification/Notification"
function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-center gap-16 py-3 border-b-[1px] border-b-razer-green">
        <ul className="ml-auto">
          <img src="Misc/razer-logo.svg" alt="Razer Logo" className="w-8" />
        </ul>
        <ul className="flex items-center gap-16">
          <li>PC</li>
          <li>Console</li>
          <li>Mobile</li>
          <li>Lifestyle</li>
          <li>Services</li>
          <li>Commuinity</li>
          <li>Support</li>
          <li>Store</li>
          <li className="text-primary-400">
            <AiOutlineSearch className="scale-150" />
          </li>
        </ul>
        <ul className="mr-auto text-primary-400">
          <AiOutlineShoppingCart className="scale-150" />
        </ul>
      </nav>
      <Notification />
    </>
  )
}

export default Navbar
