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

const Button = (props) => {
  return <button>{props.children}</button>
}

const Link = (props) => {
  return <NavLink>{props.children}</NavLink>
}

const navbarStyle = {
  height: '50px',
  width: '100vw',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'lightgray',
  position: 'sticky',
  top: 0,
  '.left': {
    display: 'flex',
  },
  '.right': {
    display: 'flex',
  },
}
