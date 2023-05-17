import React, { useCallback, useEffect, useRef, useState } from 'react'
import facepaint from 'facepaint'
import { useRecoilValue } from 'recoil'

import Button from '../components/general/Button'

import img1 from '../assets/imgs/products_1.webp'
import img2 from '../assets/imgs/products_2.webp'
import img3 from '../assets/imgs/products_3.webp'
import { languageAtom, textAtom } from '../state/atoms'

// RESPONSIVENESS SETTINGS
const breakpoints = [800, 1000]
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export default function Products({ linkRef }) {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  const [isModalOpen, setShowModal] = useState(false)

  return (
    <div css={productsStyle}>
      <div ref={linkRef} className='linkHere' />
      <h2>{text[lang].products.title}</h2>
      <p className='body'>
        {text[lang].products.subtitle1}
        <b>{text[lang].products.subtitle2}</b>
        {text[lang].products.subtitle3}
        <b>{text[lang].products.subtitle4}</b>
      </p>
      <Grid />
      <Button className='btnWrapper' onClick={() => setShowModal(true)}>
        {text[lang].products.button}
      </Button>
      {isModalOpen && <Modal setShowModal={setShowModal} />}
    </div>
  )
}

const productsStyle = mq({
  minHeight: '100vh',
  padding: ['0 40px', '0 40px', '0 80px'],
  '.linkHere': {
    position: 'relative',
    top: '-7vw',
  },
  h2: {
    margin: 0,
  },
  '> .body': {
    width: ['70%', '70%', '45%'],
    margin: '32px auto 0',
  },
  '.btnWrapper': {
    marginTop: '78px',
  },
})

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

const gridStyle = mq({
  marginTop: '48px',
  display: ['flex', 'grid'],
  // flexDirection: ""
  justifyContent: 'center',
  flexWrap: 'wrap',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  div: {
    img: {
      borderRadius: '24px',
      marginBottom: '24px',
    },
  },
})

const Modal = ({ setShowModal }) => {
  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      setShowModal(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [escFunction])

  return (
    <>
      <div
        css={blurStyle}
        onClick={() => setShowModal(false)}
        className='pointer'
      />
      <div onClick={(e) => e.stopPropagation()} css={modalStyle}>
        <h4 className='first'>Primers</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          dignissimos, voluptates eos illum modi doloribus at porro, velit
          blanditiis enim distinctio, quisquam assumenda sapiente iure
          accusantium repellat rerum? Rem, cumque.
        </p>
        <h4 className='titles'>Segons</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          provident nihil ullam reprehenderit! Explicabo tenetur, quaerat
          expedita magnam fugit hic? Animi magni officiis enim totam quia
          provident expedita rerum veniam.
        </p>
        <h4 className='titles'>Postres</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          minima asperiores quae tempora aliquam quisquam repudiandae sapiente
          neque ipsa, dolorem iure corrupti? Vero ipsam eos atque distinctio
          eius quaerat illo.
        </p>
      </div>
    </>
  )
}

const modalStyle = {
  width: '90vw',
  height: '80vh',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  border: '1px solid black',
  color: 'black',
  zIndex: 200,
  padding: '50px',
  borderRadius: '80px',
  textAlign: 'left',

  '.first': {
    margin: '0 0 1rem',
  },
  '.titles': {
    margin: '2rem 0 .75rem',
  },
}

const blurStyle = {
  backdropFilter: 'blur(8px)',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 100,
  backgroundColor: '#88888678',
}
