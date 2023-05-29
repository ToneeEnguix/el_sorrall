import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import arrow from '../../assets/imgs/arrow.webp'

export default function CustomCarousel({ children }) {
  const responsive = {
    tablet: {
      breakpoint: { max: 1000, min: 700 },
      items: 1.4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 500 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mini: {
      breakpoint: { max: 500, min: 0 },
      items: 0.5,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  return (
    <div css={mobileCarouselStyle} className='tablet'>
      <Carousel
        responsive={responsive}
        infinite={true}
        centerMode={true}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        customButtonGroup={<ButtonGroup />}
      >
        {children}
      </Carousel>
    </div>
  )
}

const CustomLeftArrow = ({ onClick }) => {
  return (
    <div className='pointer arrow left flexCenter' onClick={onClick}>
      <img src={arrow} alt='arrow' />
    </div>
  )
}

const CustomRightArrow = ({ onClick }) => {
  return (
    <div className='pointer arrow right flexCenter' onClick={onClick}>
      <img src={arrow} alt='arrow' />
    </div>
  )
}

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest
  return (
    <div className='carousel-button-group'>
      {' '}
      {/* remember to give it position:absolute */}
      <button
        className={currentSlide === 0 ? 'disable' : ''}
        onClick={() => previous()}
      >
        PREVIOUS
      </button>
      <button onClick={() => next()}>NEXT</button>
      <button onClick={() => goToSlide(currentSlide + 1)}>
        {' '}
        Go to any slide{' '}
      </button>
    </div>
  )
}

const mobileCarouselStyle = {
  img: {
    height: '418px',
    objectFit: 'cover',
  },
  '.arrow': {
    position: 'absolute',
    backgroundColor: '#FCFBF8',
    borderRadius: '100px',
    width: '55px',
    height: '55px',
    transition: 'all 200ms linear',
    border: '1px solid transparent',
    img: {
      width: '18px',
      height: 'auto',
    },
    ':hover': {
      backgroundColor: '#5299FF',
      img: { filter: 'brightness(0) invert(1)' },
    },
    ':active': {
      backgroundColor: '#FCFBF8',
      border: '1px solid #5299FF',
      img: { filter: 'none' },
    },
  },
  '.left': {
    left: 50,
    img: {
      marginLeft: '-4px',
    },
  },
  '.right': {
    right: 50,
    img: {
      transform: 'rotate(180deg)',
      marginRight: '-4px',
    },
  },
}
