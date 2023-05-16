import { useRecoilValue } from 'recoil'

import { languageAtom, textAtom } from '../../state/atoms'

export default function Footer() {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return (
    <div css={footerStyle}>
      <div className='left'>
        <h1>
          {text[lang].home.title1} {text[lang].home.title2}
        </h1>
        <p className='body'>{text[lang].home.subtitle}</p>
        <div className='icons'>
          <div className='flexCenter'>
            <img
              src='https://img.icons8.com/fluency/48/instagram-new.png'
              alt='instagram'
            />
          </div>
          <div className='flexCenter'>
            <img
              src='https://img.icons8.com/fluency/48/facebook-new.png'
              alt='facebook'
              className='fb'
            />
          </div>
        </div>
      </div>
      <div className='mid'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.427919894974!2d2.7841846760558053!3d41.66810087126568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bb162296f5422d%3A0x9b5eaa7610bc5158!2sRestaurant%20El%20Sorrall!5e0!3m2!1sen!2ses!4v1683712813694!5m2!1sen!2ses'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
        <p className='body'>
          {text[lang].footer.p1_1}
          <br />
          <a
            href='https://www.google.com/maps/place/Restaurant+El+Sorrall/@41.668101,2.78676,15z/data=!4m6!3m5!1s0x12bb162296f5422d:0x9b5eaa7610bc5158!8m2!3d41.6681009!4d2.7867596!16s%2Fg%2F1td3bxwk?hl=en'
            target='_blank'
          >
            {text[lang].footer.p1_2}
          </a>
        </p>
      </div>
      <div className='right'>
        <p className='body'>
          <a href='tel:+34972333420'>{text[lang].footer.p2}</a>
        </p>
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
  backgroundColor: '#4A4740',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '47px 20% 47px 50px',
  flexWrap: 'wrap',
  p: {
    marginBottom: '.75rem',
    color: '#fdf8e7',
    fontWeight: 200,
    fontSize: '15px',
    lineHeight: '1.8rem',
    textAlign: 'left',
  },
  '.left': {
    display: 'flex',
    justifyContent: 'space-between',
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
    '.icons': {
      display: 'flex',
      img: {
        width: '54px',
        height: '54px',
      },
      '.fb': {
        width: '48px',
        height: '48px',
      },
    },
  },
  '.mid': {
    margin: '0 1rem',
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    iframe: {
      width: '240px',
      height: '80px',
      borderRadius: '12px',
      marginBottom: '.75rem',
    },
  },
  '.right': {
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    textAlign: 'left',

    '.small': {
      fontWeight: 400,
    },
  },
}
