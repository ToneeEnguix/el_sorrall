import facepaint from 'facepaint'

import waveImg from '../../assets/imgs/wave-desktop.webp'
import tabletWaveImg from '../../assets/imgs/wave-tablet.webp'
import mobileWaveImg from '../../assets/imgs/wave-mobile.webp'

// RESPONSIVENESS SETTINGS
const breakpoints = [800, 1000]
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export default function Wave() {
  return (
    <div css={waveStyle}>
      <img className='desktop' alt='wave' src={waveImg} />
      <img className='tablet' alt='wave' src={tabletWaveImg} />
      <img className='mobile' alt='wave' src={mobileWaveImg} />
    </div>
  )
}
const waveStyle = mq({
  img: {
    position: 'relative',
    width: '100vw',
    zIndex: 2,
  },
  '.desktop': {
    height: ['', '150px', '220px'],
    display: ['none', 'none', 'block'],
    top: '-100px',
  },
  '.tablet': {
    height: '120px',
    display: ['none', 'block', 'none'],
    top: '-60px',
  },
  '.mobile': {
    height: '100px',
    display: ['block', 'none'],
    top: '-60px',
  },
})
