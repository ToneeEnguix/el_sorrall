import facepaint from 'facepaint'

import phoneImg from '../../assets/imgs/phone.webp'

// RESPONSIVENESS SETTINGS
const breakpoints = [800]
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export default function PhoneBtn() {
  return (
    <a css={phoneBtnStyle} href='tel:+34972333420'>
      <img alt='phone' src={phoneImg} />
    </a>
  )
}

const phoneBtnStyle = mq({
  background:
    'linear-gradient(53.3deg, rgba(62, 69, 255, 0.5) 25.42%, rgba(0, 167, 204, 0.47) 74.44%), linear-gradient(193.13deg, #0063F7 45.13%, #88FFC6 86.41%)',
  borderRadius: '100px',
  width: '70px',
  height: '70px',
  position: 'fixed',
  bottom: [60, 80],
  right: 60,
  display: ['flex', 'none'],
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  transition: 'all 200ms linear',
  border: '1px solid transparent',
  img: {
    transition: 'all 200ms linear',
    width: '30px',
    filter: 'brightness(0) invert(1)',
  },
  ':hover': {
    background: 'white',
    border: '1px solid #5299FF',
    img: {
      filter: 'none',
    },
  },
})
