// import mapaImg from '../../assets/imgs/mapa'

export default function Footer() {
  return (
    <div css={footerStyle}>
      <div className='left'>
        <div>
          <h1>Restaurant El Sorrall</h1>
          <p className='body'>Gastronomia catalana</p>
        </div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.427919894974!2d2.7841846760558053!3d41.66810087126568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bb162296f5422d%3A0x9b5eaa7610bc5158!2sRestaurant%20El%20Sorrall!5e0!3m2!1sen!2ses!4v1683712813694!5m2!1sen!2ses'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <div className='right'>
        <p className='body'>
          ¿Dónde nos puedes encontrar?
          <br />
          Passeig de s'Abanell, 6, baixos, 17300 Blanes, Girona
        </p>
        <p className='body'>Telefono de contacto: 972333420</p>
        <p className='body'>
          Abierto todos los días de 10 a 16 exceptuando
          <br />
          los martes por descanso del personal
        </p>
        <p className='small'>
          (Las reservas no pueden exceder los 6 comensales por motivos
          logistícos)
        </p>
      </div>
    </div>
  )
}

const footerStyle = {
  marginTop: '180px',
  minHeight: '285px',
  backgroundColor: '#4A4740',
  display: 'flex',
  // gridTemplateColumns: '1.5fr 2fr',
  padding: '47px 50px',
  flexWrap: 'wrap',
  '.left': {
    display: 'flex',
    // gridTemplateColumns: '1fr 1fr',
    div: {
      display: 'flex',
      flexDirection: 'column',
      color: '#fdf8e7',
      textAlign: 'left',
      marginTop: '-5px',
      minWidth: '120px',
      maxWidth: '140px',
      h1: {
        fontSize: '2rem',
        letterSpacing: '.06rem',
        lineHeight: '2.3rem',
      },
      p: {
        fontSize: '.7rem',
        marginTop: '10px',
        color: '#fdf8e7',
      },
    },
    iframe: {
      width: '240px',
      height: '190px',
      marginLeft: '3.5rem',
      marginRight: '3.3rem',
      borderRadius: '12px',
    },
  },
  '.right': {
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'left',
    p: {
      marginTop: '.75rem',
      color: '#fdf8e7',
      fontWeight: 200,
      fontSize: '15px',
      lineHeight: '1.4em',
    },
    '.small': {
      fontWeight: 400,
    },
  },
}
