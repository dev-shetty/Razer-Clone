import { useContext } from "react"
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai"
import { MdOutlineStorefront } from "react-icons/md"
import { BiUser, BiLogIn } from "react-icons/bi"
import { RiVipDiamondLine } from "react-icons/ri"
import { CartContext } from "../../../context/CartProvider"
import Notification from "../Notification/Notification"

function Navbar() {
  const { cart, setCart } = useContext(CartContext)
  return (
    <>
      <nav className="sticky top-0 w-full bg-primary-900 z-50 flex items-center px-4 justify-between md:justify-center gap-8 xl:gap-16 py-3 border-b-[1px] border-b-razer-green">
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
        <div className="relative md:mr-auto text-primary-400">
          <AiOutlineShoppingCart
            className="nav-item scale-150"
            onClick={() => setCart(!cart)}
          />
          {cart && (
            <div className="dropdown md:text-base absolute flex flex-col px-4 bg-primary-800 py-2 w-60 -left-[13.25rem] md:-left-52 top-[200%] border-2 border-primary-200 rounded-lg">
              <div>
                <div className="text-xs py-4 text-center">
                  <p>Your Cart is Empty</p>
                </div>
                <ul>
                  <li className="flex items-center hover:text-razer-green transition-colors cursor-pointer gap-4 border-t-[1px] border-t-primary-200 py-2">
                    <AiOutlineShoppingCart className="text-primary-100" />
                    <p>Cart</p>
                  </li>
                  <li className="flex items-center hover:text-razer-green transition-colors cursor-pointer gap-4 border-t-[1px] border-t-primary-200 py-2">
                    <MdOutlineStorefront className="text-primary-100" />
                    <p>Orders</p>
                  </li>
                  <li className="flex items-center hover:text-razer-green transition-colors cursor-pointer gap-4 border-t-[1px] border-t-primary-200 py-2">
                    <BiUser className="text-primary-100" />
                    <p>Account</p>
                  </li>
                  <li className="flex items-center hover:text-razer-green transition-colors cursor-pointer gap-4 border-t-[1px] border-t-primary-200 py-2">
                    <RiVipDiamondLine className="text-primary-100" />
                    <p>RazerStore Rewards</p>
                  </li>
                  <li className="flex items-center hover:text-razer-green transition-colors cursor-pointer gap-4 border-t-[1px] border-t-primary-200 py-2">
                    <BiLogIn className="text-primary-100" />
                    <p>Log in</p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
      <Notification />
    </>
  )
}

export default Navbar
