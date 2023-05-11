import { NavLink } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import LanguageSelector from './LanguageSelector'
import { languageAtom, textAtom } from '../../state/atoms'

import Button from '../general/Button'

export default function Navbar({ ref1, ref2, ref3 }) {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  const scrollToSection1 = () => {
    ref1.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToSection2 = () => {
    ref2.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToSection3 = () => {
    ref3.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div css={navbarStyle}>
      <div className='left bold'>
        <LanguageSelector />
      </div>
      <div className='right'>
        <Link onClick={scrollToSection1}>{text[lang].navbar.menu}</Link>
        <Link onClick={scrollToSection2}>{text[lang].navbar.who}</Link>
        <Link onClick={scrollToSection3}>{text[lang].navbar.where}</Link>
        {/* <Link onClick={scrollToSection4}>{text[lang].navbar.contact}</Link> */}
        <Button>{text[lang].navbar.reserve}</Button>
      </div>
    </div>
  )
}

const navbarStyle = {
  width: '100vw',
  maxWidth: '100vw',
  padding: '24px 0',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  fontSize: '1.23rem',
  zIndex: 10,
  '.left, .right': {
    display: 'flex',
    padding: '0 80px',
  },
  '.right': {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}

const Link = (props) => {
  return (
    <div className='pointer bold white' onClick={props.onClick} css={linkStyle}>
      {props.children}
    </div>
  )
}

const linkStyle = {
  marginRight: '1.5rem',
  textDecoration: 'none',
  transition: 'all 200ms linear',
  letterSpacing: '.05rem',
  ':hover': {
    color: 'lightgray',
  },
}
