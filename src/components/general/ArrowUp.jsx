import React, { useEffect, useState } from 'react'

import arrowUp from '../../assets/imgs/arrow_up.webp'
import arrowUpClicked from '../../assets/imgs/arrow_up_clicked.webp'

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

  if (isVisible) {
    return (
      <div
        css={scrollUpStyle}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
        className='pointer'
      >
        <img className='fixed' alt='scroll up' src={arrowUp} />
        <img className='clicked' alt='scroll up' src={arrowUpClicked} />
      </div>
    )
  } else return null
}

const scrollUpStyle = {
  backgroundColor: '#000D80',
  borderRadius: '100px',
  width: '50px',
  height: '50px',
  position: 'fixed',
  bottom: 100,
  right: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 200ms linear',
  border: '1px solid #000D80',
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
}
