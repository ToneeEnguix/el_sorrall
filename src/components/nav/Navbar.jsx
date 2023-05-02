import { NavLink } from 'react-router-dom'

import LanguageSelector from './LanguageSelector'
import { useRecoilValue } from 'recoil'
import { languageAtom, textAtom } from '../../state/atoms'
import Button from '../general/Button'

export default function Navbar() {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return (
    <div css={navbarStyle}>
      <div className='left bold'>
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
  height: '96px',
  width: 'calc(100vw - 2rem)',
  maxWidth: '100vw',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  fontSize: '1.23rem',
  '.left': {
    display: 'flex',
    padding: '24px 1.78rem',
  },
  '.right': {
    padding: '24px .8rem 24px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '-.5rem',
  },
}

const Link = (props) => {
  return (
    <NavLink className='white bold' css={linkStyle}>
      {props.children}
    </NavLink>
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
