import React from 'react'

import img1 from '../assets/imgs/blanes_1.webp'
import img2 from '../assets/imgs/blanes_2.webp'
import img3 from '../assets/imgs/blanes_3.webp'
import img4 from '../assets/imgs/blanes_4.webp'

export default function Blanes() {
  return (
    <div css={blanesStyle}>
      <h3>Blanes, primer poble de la costa brava</h3>
      <p className='body'>
        Déjate encantar por el pueblo que inicia el recorrido de la fantástica
        Costa Brava catalana. Ven a disfrutar de un día de playa, de las miles
        de rutas de senderismo y de la calidez de sus habitantes.
      </p>
      <Pics />
    </div>
  )
}

const blanesStyle = {
  marginTop: '150px',
  p: {
    width: '51%',
    margin: '0 auto',
  },
}

const Pics = () => {
  return (
    <div css={picsStyle}>
      <div>
        <img alt='' src={img1} />
      </div>
      <div>
        <img alt='' src={img2} />
      </div>
      <div>
        <img alt='' src={img3} />
      </div>
      <div>
        <img alt='' src={img4} />
      </div>
    </div>
  )
}

const picsStyle = {
  marginTop: '48px',
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
