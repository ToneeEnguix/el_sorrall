import { useRef } from 'react'

import Home from './pages/Home'
import Navbar from './components/nav/Navbar'
import Footer from './components/nav/Footer'
import Wave from './components/general/Wave'
import Products from './pages/Products'
import Blanes from './pages/Blanes'
import Restaurant from './pages/Restaurant'
import ArrowUp from './components/nav/ArrowUp'
import PhoneBtn from './components/general/PhoneBtn'

export default function App() {
  const linkRef1 = useRef(null)
  const linkRef2 = useRef(null)
  const linkRef3 = useRef(null)

  return (
    <>
      <Navbar ref1={linkRef1} ref2={linkRef2} ref3={linkRef3} />
      <ArrowUp />
      <PhoneBtn />
      <Home />
      <Wave />
      <Products linkRef={linkRef1} />
      <Blanes linkRef={linkRef2} />
      <Restaurant linkRef={linkRef3} />
      <Footer />
    </>
  )
}
