import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/UiComponents/Footer/Footer"
import Navbar from "./components/UiComponents/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import "./App.css"

function App() {
  return (
    <div className="bg-primary-900 text-primary-300 font-primary text-primary min-h-[200vh]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
