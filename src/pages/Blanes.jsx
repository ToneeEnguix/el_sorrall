import React from 'react'
import { useRecoilValue } from 'recoil'
import facepaint from 'facepaint'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { languageAtom, textAtom } from '../state/atoms'

import img1 from '../assets/imgs/blanes_1.webp'
import img2 from '../assets/imgs/blanes_2.webp'
import img3 from '../assets/imgs/blanes_3.webp'
import img4 from '../assets/imgs/blanes_4.webp'

// RESPONSIVENESS SETTINGS
const breakpoints = [800, 1000]
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export default function Blanes({ linkRef }) {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return (
    <div css={blanesStyle}>
      <div ref={linkRef} className='linkHere' />
      <h3>{text[lang].blanes.title}</h3>
      <p className='body'>
        {text[lang].blanes.subtitle1}
        <b>{text[lang].blanes.subtitle2}</b>
        {text[lang].blanes.subtitle3}
      </p>
      <Pics lang={lang} text={text} />
      <MobileCarousel lang={lang} text={text} />
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
    display: ['block', 'none'],
  },
})

const Pics = ({ lang, text }) => {
  return (
    <div css={picsStyle} className='desktop'>
      <div>
        <img alt={text[lang].blanes.img1alt} src={img1} />
      </div>
      <div>
        <img alt={text[lang].blanes.img2alt} src={img2} />
      </div>
      <div>
        <img alt={text[lang].blanes.img3alt} src={img3} />
      </div>
      <div>
        <img alt={text[lang].blanes.img4alt} src={img4} />
      </div>
    </div>
  )
}

const picsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr) 2fr',
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
      items: 2.5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1.8,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  return (
    <div css={mobileCarouselStyle} className='tablet'>
      <Carousel responsive={responsive} infinite={true}>
        <div>
          <img alt={text[lang].blanes.img1alt} src={img1} />
        </div>
        <div>
          <img alt={text[lang].blanes.img2alt} src={img2} />
        </div>
        <div>
          <img alt={text[lang].blanes.img3alt} src={img3} />
        </div>
        <div>
          <img alt={text[lang].blanes.img4alt} src={img4} />
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
