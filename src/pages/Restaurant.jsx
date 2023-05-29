import React from 'react'
import { useRecoilValue } from 'recoil'
import facepaint from 'facepaint'

import { languageAtom, textAtom } from '../state/atoms'
import Carousel from '../components/general/Carousel'

import img1 from '../assets/imgs/restaurant_1.webp'
import img2 from '../assets/imgs/restaurant_2.webp'
import img3 from '../assets/imgs/restaurant_3.webp'

// RESPONSIVENESS SETTINGS
const breakpoints = [800, 1000]
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export default function Restaurant({ linkRef }) {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return (
    <div css={blanesStyle}>
      <div ref={linkRef} className='linkHere' />
      <h3>{text[lang].restaurant.title}</h3>
      <p className='body'>
        {text[lang].restaurant.subtitle1}
        <b>{text[lang].restaurant.subtitle2}</b>
        {text[lang].restaurant.subtitle3}
        <b>{text[lang].restaurant.subtitle4}</b>
        {text[lang].restaurant.subtitle5}
      </p>
      <Pics lang={lang} text={text} />
      <MobileCarousel lang={lang} text={text} />{' '}
    </div>
  )
}

const blanesStyle = mq({
  marginTop: '150px',
  '.linkHere': {
    position: 'relative',
    top: '-7vw',
  },
  p: {
    width: ['calc(100% - 80px)', '70%', '51%'],
    margin: '0 auto 48px',
  },
  '.desktop': {
    display: ['none', 'none', 'flex'],
  },
  '.tablet': {
    display: ['block', 'block', 'none'],
  },
})

const Pics = ({ text, lang }) => {
  return (
    <div css={picsStyle} className='desktop'>
      <div>
        <img alt={text[lang].restaurant.img1alt} src={img1} />
      </div>
      <div>
        <img alt={text[lang].restaurant.img2alt} src={img2} />
      </div>
      <div>
        <img alt={text[lang].restaurant.img3alt} src={img3} />
      </div>
    </div>
  )
}

const picsStyle = {
  display: 'grid',
  gridTemplateColumns: '2fr repeat(2, 1fr)',
  height: '416px',
  gap: '16px',
  div: {
    height: '416px',
    img: {
      height: '100%',
      objectFit: 'cover',
    },
  },
}

const MobileCarousel = ({ lang, text }) => {
  return (
    <div css={mobileCarouselStyle} className='tablet'>
      <Carousel>
        <div className='imgContainer'>
          <img alt={text[lang].blanes.img1alt} src={img1} />
        </div>
        <div className='imgContainer'>
          <img alt={text[lang].blanes.img2alt} src={img2} />
        </div>
        <div className='imgContainer'>
          <img alt={text[lang].blanes.img3alt} src={img3} />
        </div>
      </Carousel>
    </div>
  )
}

const mobileCarouselStyle = mq({
  '.imgContainer': {
    padding: ['0 15px', '0 0 0 25px'],
  },
})
