import waveImg from '../../assets/imgs/wave-desktop.webp'

export default function Wave() {
  return (
    <div css={waveStyle}>
      <img alt='wave' src={waveImg} />
    </div>
  )
}
const waveStyle = {
  position: 'absolute',
  top: '90vh',
  img: {
    width: '100vw',
    height: '220px',
  },
}
