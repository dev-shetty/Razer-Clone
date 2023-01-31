import React, { SetStateAction, useState } from "react"

type Props = {
  children: JSX.Element
}
interface CartProps {
  cart: boolean
  setCart: any
}

export const CartContext = React.createContext<Partial<CartProps>>({})

function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<boolean>(false)
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
