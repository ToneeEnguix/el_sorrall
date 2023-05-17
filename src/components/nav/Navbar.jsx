import { useCallback, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import facepaint from 'facepaint'
import { keyframes } from '@emotion/react'

import LanguageSelector from './LanguageSelector'
import { languageAtom, textAtom } from '../../state/atoms'
import Button from '../general/Button'

import burger from '../../assets/imgs/burger.webp'
import burgerOpen from '../../assets/imgs/burger_open.webp'
import LanguageSelectorMobile from './LanguageSelectorMobile'
import mobileMenuWave from '../../assets/imgs/mobile-menu-wave.webp'

// RESPONSIVENESS SETTINGS
const breakpoints = [800, 1000]
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export default function Navbar({ ref1, ref2, ref3 }) {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  const [isMenuOpen, setOpenMenu] = useState(false)

  const scrollToSection1 = () => {
    ref1.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToSection2 = () => {
    ref2.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToSection3 = () => {
    ref3.current.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleMenu = () => {
    setOpenMenu(!isMenuOpen)
    if (isMenuOpen) {
    }
  }

  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      setOpenMenu(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [escFunction])

  return (
    <div css={navbarStyle}>
      <div className='left bold'>
        <LanguageSelector />
      </div>
      <div className='right'>
        <Link onClick={scrollToSection1}>{text[lang].navbar.menu}</Link>
        <Link onClick={scrollToSection2}>{text[lang].navbar.where}</Link>
        <Link onClick={scrollToSection3}>{text[lang].navbar.who}</Link>
        <Button>{text[lang].navbar.reserve}</Button>
      </div>
      <div className='mobile'>
        <div className='flexCenter pointer'>
          <img
            className='open'
            src={burgerOpen}
            alt='menu burger open'
            onClick={toggleMenu}
            style={{ opacity: isMenuOpen ? 1 : 0, zIndex: 1 }}
          />
          <img
            className='closed'
            src={burger}
            alt='menu burger'
            onClick={toggleMenu}
            style={{ opacity: isMenuOpen ? 0 : 1, zIndex: 1 }}
          />
        </div>
        {isMenuOpen && (
          <>
            <MobileMenu lang={lang} text={text} />
            <div css={click_outside} onClick={() => setOpenMenu(false)} />
          </>
        )}
      </div>
    </div>
  )
}

// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `

const navbarStyle = mq({
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
    display: ['none', 'flex', 'flex'],
  },
  '.left': {
    padding: ['0 0 0 40px', '0 0 0 40px', '0 0 0 80px'],
  },
  '.right': {
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: ['0 40px 0 0', '0 40px 0 0', '0 80px 0 0'],
  },
  '.mobile': {
    display: ['block', 'none'],
    position: 'fixed',
    left: '50%',
    right: '50%',
    '.open, .closed': {
      height: 'auto',
      width: '26px',
      // webkitTransition: 'opacity 500ms ease-in-out',
      // mozTransition: 'opacity 500ms ease-in-out',
      // oTransition: 'opacity 500ms ease-in-out',
      // transition: 'opacity 500ms ease-in-out',
      position: 'absolute',
      top: 16,
    },
  },
})

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
  color: '#000D80',
  ':hover': {
    color: '#59609d',
  },
}

const MobileMenu = ({ lang, text }) => {
  return (
    <div css={mobileMenuStyle} onClick={(e) => e.stopPropagation()}>
      <p tabIndex='0'>{text[lang].navbar.menu}</p>
      <p tabIndex='0'>{text[lang].navbar.where}</p>
      <p tabIndex='0'>{text[lang].navbar.who}</p>
      <p tabIndex='0'>{text[lang].navbar.reserve}</p>
      <img src={mobileMenuWave} alt='wave decoration' />
      <LanguageSelectorMobile />
    </div>
  )
}

const mobileMenuStyle = {
  // animation: `${fadeIn} 1s ease;`,
  position: 'fixed',
  top: 72,
  margin: '0 auto',
  left: 0,
  right: 0,
  width: '50vw',
  minWidth: '240px',
  backgroundColor: '#FCFBF8E5',
  borderRadius: '0 0 32px 32px',
  padding: '40px',
  color: '#000D80',
  fontWeight: 600,
  zIndex: 10,
  'p, img': {
    marginBottom: '1.25rem',
  },
}

const click_outside = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  // backgroundColor: 'black',
  zIndex: -1,
}
