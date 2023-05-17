import React from 'react'
import { useRecoilValue } from 'recoil'
import facepaint from 'facepaint'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { languageAtom, textAtom } from '../state/atoms'

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
    width: ['70%', '70%', '51%'],
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
  const responsive = {
    tablet: {
      breakpoint: { max: 1000, min: 700 },
      items: 1.4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 500 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mini: {
      breakpoint: { max: 500, min: 0 },
      items: 0.5,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  return (
    <div css={mobileCarouselStyle} className='tablet'>
      <Carousel responsive={responsive} infinite={true} centerMode={true}>
        <div>
          <img alt={text[lang].blanes.img1alt} src={img1} />
        </div>
        <div>
          <img alt={text[lang].blanes.img2alt} src={img2} />
        </div>
        <div>
          <img alt={text[lang].blanes.img3alt} src={img3} />
        </div>
      </Carousel>
    </div>
  )
}

const mobileCarouselStyle = {
  div: {
    padding: '0 0 0 25px',
  },
  img: {
    height: '418px',
    objectFit: 'cover',
    // marginLeft: '50px',
  },
}
