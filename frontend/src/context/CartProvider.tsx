import React, { useState } from "react"

type Props = {
  children: JSX.Element
}
interface CartProps {
  cart: boolean
  // setCart: React.Dispatch<React.SetStateAction<boolean>>
  setCart: any
}

export const CartContext = React.createContext<Partial<CartProps>>({
  cart: false,
})

function CartProvider({ children }: Props) {
  const [cart, setCart] = useState(false)
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
