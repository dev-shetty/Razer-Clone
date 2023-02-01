import React, { useState } from "react"
import { ChildrenProp } from "../utils/types"

interface NavbarContextType {
  nav: boolean
  setNav: any
}

export const NavbarContext = React.createContext<Partial<NavbarContextType>>({})

function NavbarProvider({ children }: ChildrenProp) {
  const [nav, setNav] = useState(false)
  return (
    <NavbarContext.Provider value={{ nav, setNav }}>
      {children}
    </NavbarContext.Provider>
  )
}

export default NavbarProvider
