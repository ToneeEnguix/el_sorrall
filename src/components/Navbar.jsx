import { NavLink } from 'react-router-dom'

import LanguageSelector from './LanguageSelector'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div css={navbarStyle}>
      <div className='left'>
        <Logo />
        <LanguageSelector />
      </div>
      <div className='right'>
        <Link to='/'>Menú</Link>
        <Link to='/'>Qui som?</Link>
        <Link to='/'>On som?</Link>
        <Link to='/'>Contacte</Link>
        <Button>Reserva</Button>
      </div>
    </div>
  )
}

const navbarStyle = {
  height: '50px',
  width: 'calc(100vw - 2rem)',
  maxWidth: '100vw',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  backgroundColor: '#d3d3d373',
  position: 'fixed',
  top: 0,
  padding: '0 1rem',
  color: 'white',
  '.left': {
    display: 'flex',
  },
  '.right': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}

const Button = (props) => {
  return (
    <button className='pointer' css={buttonStyle}>
      {props.children}
    </button>
  )
}

const buttonStyle = {
  backgroundColor: '#050E80',
  borderRadius: '100px',
  border: 'none',
  color: 'white',
  padding: '0.5rem 1rem',
  transition: 'all 200ms linear',
  // marginRight: '2rem',
  ':hover': {
    backgroundColor: 'yellow',
  },
}

const Link = (props) => {
  return <NavLink css={linkStyle}>{props.children}</NavLink>
}

const linkStyle = {
  marginRight: '1rem',
  color: 'white',
  textDecoration: 'none',
  transition: 'all 200ms linear',
  ':hover': {
    color: 'gray',
  },
}
