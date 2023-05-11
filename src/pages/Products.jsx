import React, { useRef } from 'react'

import Button from '../components/general/Button'

import img1 from '../assets/imgs/products_1.webp'
import img2 from '../assets/imgs/products_2.webp'
import img3 from '../assets/imgs/products_3.webp'

export default function Products({ linkRef }) {
  return (
    <div css={productsStyle}>
      <div ref={linkRef} className='linkHere' />
      <h2>Els nostres plats casolans</h2>
      <p className='body'>
        Descubre nuestros platos inspirados en recetas de la cocina tradicional
        catalana. Nuestro objetivo principal es proporcionar platos que
        representen los sabores de la cocina clásica de nuestra tierra y con
        ello aportar un acercamiento a la gastronomía catalana.
      </p>
      <Grid />
      <Button className='btnWrapper'>Visualitza</Button>
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
  return (
    <div css={gridStyle}>
      <div>
        <img alt='' src={img1} />
        <p className='bold'>Amanida d’alvocat</p>
        <p className='body'>Amb un llit tomàquet i llagostins</p>
      </div>
      <div>
        <img alt='' src={img2} />
        <p className='bold'>Confit d’ánec</p>
        <p className='body'>
          Amb una guarnició de puré de patata i compota de poma
        </p>
      </div>
      <div>
        <img alt='' src={img3} />
        <p className='bold'>Pastís calent de xocolata</p>
        <p className='body'>
          Amb una bola de gelat de vainilla d’acompanyament
        </p>
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
