import { NavLink } from 'react-router-dom'

import LanguageSelector from './LanguageSelector'
import Logo from './Logo'
import { useRecoilValue } from 'recoil'
import { languageAtom, textAtom } from '../../state/atoms'

export default function Navbar() {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return (
    <div css={navbarStyle}>
      <div className='left bold'>
        <Logo />
        <LanguageSelector />
      </div>
      <div className='right medium'>
        <Link to='/'>{text[lang].navbar.menu}</Link>
        <Link to='/'>{text[lang].navbar.who}</Link>
        <Link to='/'>{text[lang].navbar.where}</Link>
        <Link to='/'>{text[lang].navbar.contact}</Link>
        <Button>{text[lang].navbar.reserve}</Button>
      </div>
    </div>
  )
}

const navbarStyle = {
  height: '145px',
  width: 'calc(100vw - 2rem)',
  maxWidth: '100vw',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  alignItems: 'center',
  // backgroundColor: '#d3d3d373',
  position: 'fixed',
  top: 0,
  color: 'white',
  fontSize: '1.23rem',
  '.left': {
    display: 'flex',
    padding: '0 1.78rem',
  },
  '.right': {
    padding: '0 .8rem 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '-.5rem',
  },
}

const Button = (props) => {
  return (
    <button className='pointer medium' css={buttonStyle}>
      {props.children}
    </button>
  )
}

const buttonStyle = {
  backgroundColor: '#050E80',
  borderRadius: '100px',
  border: 'none',
  color: 'white',
  padding: '1.1rem 2.5rem',
  transition: 'all 200ms linear',
  fontSize: '1.2rem',
  marginLeft: '1.75rem',
  ':hover': {
    backgroundColor: 'yellow',
  },
}

const Link = (props) => {
  return <NavLink css={linkStyle}>{props.children}</NavLink>
}

const linkStyle = {
  marginRight: '1.5rem',
  color: 'white',
  textDecoration: 'none',
  transition: 'all 200ms linear',
  letterSpacing: '.05rem',
  ':hover': {
    color: 'lightgray',
  },
}
