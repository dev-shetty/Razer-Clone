import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai"
import Notification from "../Notification/Notification"
function Navbar() {
  return (
    <>
      <nav className="flex items-center px-4 justify-between md:justify-center gap-8 xl:gap-16 py-3 border-b-[1px] border-b-razer-green">
        <div className="block md:hidden cursor-pointer">
          <AiOutlineMenu className="nav-item scale-150" />
        </div>
        <div className="md:ml-auto cursor-pointer">
          <img src="Misc/razer-logo.svg" alt="Razer Logo" className="w-8" />
        </div>
        <ul className="hidden items-center gap-4 lg:gap-8 xl:gap-16 md:flex">
          <li className="nav-item">PC</li>
          <li className="nav-item">Console</li>
          <li className="nav-item">Mobile</li>
          <li className="nav-item">Lifestyle</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Commuinity</li>
          <li className="nav-item">Support</li>
          <li className="nav-item">Store</li>
          <li className="text-primary-400">
            <AiOutlineSearch className="nav-item scale-150" />
          </li>
        </ul>
        <div className="md:mr-auto text-primary-400">
          <AiOutlineShoppingCart className="nav-item scale-150" />
        </div>
      </nav>
      <Notification />
    </>
  )
}

export default Navbar
