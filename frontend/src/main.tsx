import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import CartProvider from "./context/CartProvider"
import NavbarProvider from "./context/NavbarProvider"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NavbarProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </NavbarProvider>
  </React.StrictMode>
) 
