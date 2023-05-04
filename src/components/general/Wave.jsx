import waveImg from '../../assets/imgs/wave-desktop.webp'

export default function Wave() {
  return (
    <div css={waveStyle}>
      <img alt='wave' src={waveImg} />
    </div>
  )
}
const waveStyle = {
  position: 'relative',
  top: '-100px',
  img: {
    width: '100vw',
    height: '220px',
  },
}

// import './wave.css'

// export default function Wave() {
//   return (
//     <svg
//       className='editorial'
//       xmlns='http://www.w3.org/2000/svg'
//       xmlnsXlink='http://www.w3.org/1999/xlink'
//       viewBox='0 24 150 28'
//       preserveAspectRatio='none'
//     >
//       <defs>
//         <path
//           id='gentle-wave'
//           d='M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z'
//         />
//       </defs>
//       <g className='parallax'>
//         <use xlinkHref='#gentle-wave' x='50' y='0' fill='#4579e2' />
//         <use xlinkHref='#gentle-wave' x='50' y='3' fill='#3461c1' />
//         <use xlinkHref='#gentle-wave' x='50' y='6' fill='#2d55aa' />
//       </g>
//     </svg>
//   )
// }
