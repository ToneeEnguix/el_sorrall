import { useRecoilValue } from 'recoil'

import { languageAtom, textAtom } from '../../state/atoms'
// import mapaImg from '../../assets/imgs/mapa'

export default function Footer() {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return (
    <div css={footerStyle}>
      <div className='left'>
        <div>
          <h1>
            {text[lang].home.title1} {text[lang].home.title2}
          </h1>
          <p className='body'>{text[lang].home.subtitle}</p>
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
          {text[lang].footer.p1_1}
          <br />
          {text[lang].footer.p1_2}
        </p>
        <p className='body'>{text[lang].footer.p2}</p>
        <p className='body'>
          {text[lang].footer.p3_1}
          <br />
          {text[lang].footer.p3_2}
        </p>
        <p className='small'>{text[lang].footer.p4}</p>
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
