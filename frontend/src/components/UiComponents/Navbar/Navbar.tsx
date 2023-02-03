import { useContext, useState } from "react"
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai"
import { MdOutlineStorefront } from "react-icons/md"
import { BiUser, BiLogIn } from "react-icons/bi"
import { RiVipDiamondLine } from "react-icons/ri"
import { FaAngleRight } from "react-icons/fa"
import { CartContext } from "../../../context/CartProvider"
import { NavbarContext } from "../../../context/NavbarProvider"
import Notification from "../Notification/Notification"
import SearchBox from "../Inputs/SearchBox"
import { VscClose } from "react-icons/vsc"

function Navbar() {
  const { cart, setCart } = useContext(CartContext)
  const { nav, setNav } = useContext(NavbarContext)
  const [search, setSearch] = useState(false)
  return (
    <>
      <nav className="md:sticky top-0 w-full bg-primary-900 z-50 flex items-center px-4 justify-between md:justify-center gap-8 xl:gap-16 py-3 border-b-[1px] border-b-razer-green">
        <div className="block md:hidden cursor-pointer z-20">
          {nav ? (
            <AiOutlineClose
              className="nav-item scale-150"
              onClick={() => setNav(!nav)}
            />
          ) : (
            <AiOutlineMenu
              className="nav-item scale-150"
              onClick={() => setNav(!nav)}
            />
          )}
        </div>
        {nav && (
          <nav className="no-scroll fixed overflow-auto md:hidden inset-0 bg-primary-900 z-10">
            <div className="mt-16 mx-4">
              <SearchBox />
              <div className="m-4">
                <ul className="flex flex-col text-base">
                  <li className="mobile-nav-item flex items-center gap-2">
                    <p>PC</p>
                    <FaAngleRight className="text-razer-green" />
                  </li>
                  <li className="mobile-nav-item">Console</li>
                  <li className="mobile-nav-item">Mobile</li>
                  <li className="mobile-nav-item">Lifestyle</li>
                  <li className="mobile-nav-item">Services</li>
                  <li className="mobile-nav-item">Community</li>
                  <li className="mobile-nav-item">Support</li>
                  <li className="mobile-nav-item">Store</li>
                </ul>
              </div>
            </div>
          </nav>
        )}
        <div className="md:ml-auto cursor-pointer z-20">
          <img src="/Misc/razer-logo.svg" alt="Razer Logo" className="w-8" />
        </div>
        {search ? (
          <SearchBox />
        ) : (
          <ul className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-16">
            <li className="nav-item">PC</li>
            <li className="nav-item">Console</li>
            <li className="nav-item">Mobile</li>
            <li className="nav-item">Lifestyle</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Commuinity</li>
            <li className="nav-item">Support</li>
            <li className="nav-item">Store</li>
            <li className="text-primary-400">
              <AiOutlineSearch
                className="nav-item scale-150"
                onClick={() => {
                  setSearch(!search)
                  setCart(false)
                }}
              />
            </li>
          </ul>
        )}
        <div className="relative md:mr-auto text-primary-400">
          {search ? (
            <VscClose
              className="scale-150 cursor-pointer"
              onClick={() => setSearch(!search)}
            />
          ) : (
            <AiOutlineShoppingCart
              className="nav-item scale-150"
              onClick={() => setCart(!cart)}
            />
          )}
          {cart && (
            <div className="dropdown md:text-base absolute z-10 flex flex-col px-4 bg-primary-800 py-2 w-60 -left-[13.25rem] md:-left-52 top-[200%] border-2 border-primary-200 rounded-lg">
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
