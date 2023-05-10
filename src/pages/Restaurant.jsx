import React from 'react'

import img1 from '../assets/imgs/restaurant_1.webp'
import img2 from '../assets/imgs/restaurant_2.webp'
import img3 from '../assets/imgs/restaurant_3.webp'

export default function Restaurant() {
  return (
    <div css={blanesStyle}>
      <h3>El Restaurant a la vora de la mar</h3>
      <p className='body'>
        El Sorrall esta situado en el paseo marítimo a primera linea de mar,
        permitiendo a nuestros clientes una vista privilegiada mientras
        disfrutan de los platos que servimos. Nuestro equipo de profesionales te
        harán sentir como en casa y con ganas de volver a hacernos una visita.
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
    </div>
  )
}

const picsStyle = {
  marginTop: '48px',
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
