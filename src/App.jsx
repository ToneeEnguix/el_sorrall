// import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/nav/Navbar'
import Footer from './components/nav/Footer'
import Wave from './components/general/Wave'
import Products from './pages/Products'
import Blanes from './pages/Blanes'
import Restaurant from './pages/Restaurant'

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
      <Home />
      <Wave />
      <Products />
      <Blanes />
      <Restaurant />
      <Footer />
    </>
  )
}
