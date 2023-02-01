import React, { useState } from "react"
import { ChildrenProp } from "../utils/types"

interface CartContextType {
  cart: boolean
  setCart: any
}

export const CartContext = React.createContext<Partial<CartContextType>>({})

function CartProvider({ children }: ChildrenProp) {
  const [cart, setCart] = useState(false)
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
