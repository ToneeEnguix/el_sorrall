import facepaint from 'facepaint'

import waveImg from '../../assets/imgs/wave-desktop.webp'
import mobileWaveImg from '../../assets/imgs/wave-mobile.webp'

// RESPONSIVENESS SETTINGS
const breakpoints = [800, 1000]
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export default function Wave() {
  return (
    <div css={waveStyle}>
      <img className='desktop' alt='wave' src={waveImg} />
      <img className='mobile' alt='wave' src={waveImg} />
    </div>
  )
}
const waveStyle = mq({
  img: {
    position: 'relative',
    width: '100vw',
  },
  '.desktop': {
    height: ['', '150px', '220px'],
    display: ['none', 'block'],
    top: '-100px',
  },
  '.mobile': {
    height: '100px',
    display: ['block', 'none'],
    top: '-60px',
  },
})
