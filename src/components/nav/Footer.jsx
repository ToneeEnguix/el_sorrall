import { useRecoilValue } from 'recoil'
import facepaint from 'facepaint'

import { languageAtom, textAtom } from '../../state/atoms'

import fbLogo from '../../assets/imgs/fb.webp'
import igLogo from '../../assets/imgs/ig.webp'

// RESPONSIVENESS SETTINGS
const breakpoints = [800, 1000]
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export default function Footer() {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return (
    <div css={footerStyle}>
      <div className='left'>
        <div className='footer_titles'>
          <h1 style={{ marginRight: '6px' }}>{text[lang].home.title1}</h1>
          <h1>{text[lang].home.title2}</h1>
        </div>
        {/* <p className='body'>{text[lang].home.subtitle}</p> */}
        <Icons className='icons1' />
      </div>
      <div className='mid'>
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
          <a
            href='https://www.google.com/maps/place/Restaurant+El+Sorrall/@41.668101,2.78676,15z/data=!4m6!3m5!1s0x12bb162296f5422d:0x9b5eaa7610bc5158!8m2!3d41.6681009!4d2.7867596!16s%2Fg%2F1td3bxwk?hl=en'
            target='_blank'
          >
            {text[lang].footer.p1_2}
          </a>
        </p>
        <p className='body'>
          <a href='tel:+34972333420'>{text[lang].footer.p2}</a>
        </p>
        <p className='body'>
          {text[lang].footer.p3_1}
          <br />
          {text[lang].footer.p3_2}
        </p>
        {/* <p className='small'>{text[lang].footer.p4}</p> */}
        <p className='small'>
          (Les reserves no poden excedir els 6 comensals per motius logístics)
        </p>
      </div>
      <Icons className='icons2' />
    </div>
  )
}

const footerStyle = mq({
  marginTop: '180px',
  backgroundColor: '#000B1A',
  // display: 'flex',
  display: 'grid',
  gridTemplateColumns: ['1fr', 'auto auto 45%'],
  // justifyContent: 'space-between',
  gap: '1rem',
  justifyItems: 'center',
  padding: '60px 50px 75px',
  justifyItems: ['center', 'left'],
  // flexWrap: 'wrap',
  textAlign: ['center', 'left', 'left'],
  p: {
    //   marginBottom: '.75rem',
    color: '#fdf8e7',
    //   fontWeight: 200,
    fontSize: '15px',
    lineHeight: '1.8rem',
    //   textAlign: 'left',
    letterSpacing: '.01rem',
  },
  '.left': {
    width: ['auto', 'auto', '150px'],
    '.footer_titles': {
      display: 'flex',
      flexWrap: 'wrap',
    },
    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   flexDirection: 'column',
    //   color: '#fdf8e7',
    //   textAlign: 'left',
    //   marginTop: '-5px',
    //   minWidth: '120px',
    //   maxWidth: '140px',
    h1: {
      fontSize: '2rem',
      letterSpacing: '.06rem',
      lineHeight: '2.3rem',
    },
    //   p: {
    //     fontSize: '.7rem',
    //     marginTop: '10px',
    //     color: '#fdf8e7',
  },
  '.icons1': {
    display: ['none', 'flex'],
    img: {
      width: '40px',
      height: '40px',
      margin: '1rem 1rem 0 0',
      borderRadius: '100px',
    },
    //     '.fb': {
    //       width: '48px',
    //       height: '48px',
    //     },
  },
  //   },
  '.mid': {
    // margin: ['1rem 0 0', '0 1rem'],
    //   width: 'fit-content',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'space-between',
    //   order: [1, 2, 3],
    width: ['auto', 'auto', '310px'],
    iframe: {
      width: ['240px', '240px', '300px'],
      height: '100%',
      borderRadius: '12px',
      //     marginBottom: '.75rem',
    },
  },
  '.right': {
    //   order: [1, 2, 3],
    //   width: 'fit-content',
    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   flexDirection: 'column',
    //   textAlign: 'left',
    '.small': {
      fontWeight: 400,
      fontStyle: 'italic',
      fontSize: '14px',
    },
  },
  '.icons2': {
    display: ['flex', 'none'],
    img: {
      width: '40px',
      height: '40px',
      margin: '1rem 1rem 0 0',
      borderRadius: '100px',
    },
    //     '.fb': {
    //       width: '48px',
    //       height: '48px',
    //     },
  },
})

const Icons = ({ className }) => {
  return (
    <div className={className}>
      <div className='flexCenter'>
        <img src={fbLogo} alt='instagram' />
      </div>
      <div className='flexCenter'>
        <img src={igLogo} alt='facebook' />
      </div>
    </div>
  )
}
