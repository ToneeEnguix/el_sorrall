import React from 'react'
import facepaint from 'facepaint'
import { useRecoilValue } from 'recoil'

import Button from '../components/general/Button'

import img1 from '../assets/imgs/products_1.webp'
import img2 from '../assets/imgs/products_2.webp'
import img3 from '../assets/imgs/products_3.webp'
import { languageAtom, textAtom } from '../state/atoms'

// RESPONSIVENESS SETTINGS
const breakpoints = [600, 800, 1300, 1800]
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export default function Products({ linkRef }) {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return (
    <div css={productsStyle}>
      <div ref={linkRef} className='linkHere' />
      <h2>{text[lang].products.title}</h2>
      <p className='body'>{text[lang].products.subtitle}</p>
      <Grid />
      <Button className='btnWrapper'>{text[lang].products.button}</Button>
      <dialog>test</dialog>
    </div>
  )
}

const productsStyle = {
  minHeight: '100vh',
  padding: '0 80px',
  position: 'relative',
  '.linkHere': {
    position: 'absolute',
    top: '-7vw',
  },
  h2: {
    margin: 0,
  },
  '> .body': {
    width: '45%',
    margin: '32px auto 0',
  },
  '.btnWrapper': {
    marginTop: '78px',
  },
}

const Grid = () => {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return (
    <div css={gridStyle}>
      <div>
        <img alt={text[lang].products.img1alt} src={img1} />
        <p className='bold'>{text[lang].products.dish1}</p>
        <p className='body'>{text[lang].products.description1}</p>
      </div>
      <div>
        <img alt={text[lang].products.img2alt} src={img2} />
        <p className='bold'>{text[lang].products.dish2}</p>
        <p className='body'>{text[lang].products.description2}</p>
      </div>
      <div>
        <img alt={text[lang].products.img3alt} src={img3} />
        <p className='bold'>{text[lang].products.dish3}</p>
        <p className='body'>{text[lang].products.description3}</p>
      </div>
    </div>
  )
}

const gridStyle = {
  marginTop: '48px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  div: {
    img: {
      borderRadius: '24px',
      marginBottom: '24px',
    },
  },
}