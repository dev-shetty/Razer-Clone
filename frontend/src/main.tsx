import React from "react"
import ReactDOM from "react-dom/client"
import CartProvider from "./context/CartProvider"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
)
