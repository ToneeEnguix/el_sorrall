import React, { useEffect, useState } from 'react'
import { keyframes } from '@emotion/react'
import { animateScroll } from 'react-scroll'
import facepaint from 'facepaint'

import arrowUp from '../../assets/imgs/arrow_up.webp'
import arrowUpClicked from '../../assets/imgs/arrow_up_clicked.webp'

// RESPONSIVENESS SETTINGS
const breakpoints = [800, 1000]
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export default function ArrowUp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = 170
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    if (winScroll < heightToHideFrom) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }

  const scrollUp = () => {
    const offsetY = window.scrollY
    animateScroll.scrollToTop({ duration: offsetY - offsetY * 0.4 })
  }

  if (isVisible) {
    return (
      <div css={scrollUpStyle} onClick={scrollUp} className='pointer'>
        <img className='fixed' alt='scroll up' src={arrowUp} />
        <img className='clicked' alt='scroll up' src={arrowUpClicked} />
      </div>
    )
  } else return null
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const scrollUpStyle = mq({
  animation: `${fadeIn} 1s ease;`,
  backgroundColor: '#000D80',
  borderRadius: '100px',
  width: '50px',
  height: '50px',
  position: 'fixed',
  bottom: [170, 140, 80],
  right: 80,
  display: ['none', 'flex'],
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 200ms linear',
  border: '1px solid #000D80',
  zIndex: 2,
  ':hover': {
    backgroundColor: '#FDF8E7',
    border: '1px solid #000D80',
    '.fixed': {
      display: 'none',
    },
    '.clicked': {
      display: 'block',
    },
  },
  img: {
    height: '25px',
    width: 'auto',
  },
  '.clicked': {
    display: 'none',
  },
})
