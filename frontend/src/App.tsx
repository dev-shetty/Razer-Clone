import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Footer from "./components/UiComponents/Footer/Footer"
import Navbar from "./components/UiComponents/Navbar/Navbar"
import CartProvider from "./context/CartProvider"
import HomePage from "./pages/HomePage"

function App() {
  const [cart, setCart] = useState(false)
  return (
    <CartProvider>
      <div className="bg-primary-900 text-primary-300 font-primary text-primary min-h-[200vh]">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  )
}

export default App
