import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/nav/Navbar'
import Footer from './components/nav/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
