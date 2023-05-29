import facepaint from 'facepaint'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import arrow from '../../assets/imgs/arrow.webp'

// RESPONSIVENESS SETTINGS
const breakpoints = [800]
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

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
      items: 1,
      // slidesToSlide: 1, // optional, default to 1.
    },
  }

  return (
    <div css={mobileCarouselStyle} className='tablet'>
      <Carousel
        responsive={responsive}
        infinite={true}
        centerMode={false}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        customButtonGroup={<ButtonGroup length={children.length} />}
        //
        autoPlay={true}
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        draggable
        focusOnSelect={false}
        keyBoardControl
        // minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        swipeable
      >
        {children}
      </Carousel>
    </div>
  )
}

const mobileCarouselStyle = mq({
  ul: {
    paddingBottom: '20px',
  },
  img: {
    height: '418px',
    objectFit: 'cover',
  },
  '.arrow': {
    position: 'absolute',
    backgroundColor: '#FCFBF8',
    borderRadius: '100px',
    width: ['40px', '40px', '55px'],
    height: ['40px', '40px', '55px'],
    transition: 'all 200ms linear',
    border: '1px solid transparent',
    img: {
      width: ['10px', '10px', '18px'],
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
    left: [20, 50],
    img: {
      marginLeft: '-4px',
    },
  },
  '.right': {
    right: [20, 50],
    img: {
      transform: 'rotate(180deg)',
      marginRight: '-4px',
    },
  },
})

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

const ButtonGroup = ({ length, next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest

  const totalItems = [...Array(length).keys()]

  const actualCurrentSlide =
    Math.floor(currentSlide) > totalItems.length - 1
      ? Math.floor(currentSlide) - totalItems.length
      : Math.floor(currentSlide)

  return (
    <div css={btnGroupStyle}>
      {totalItems.map((x) => {
        return (
          <div
            className={`dot ${actualCurrentSlide === x ? 'active' : ''}`}
            key={x}
            onClick={() => goToSlide(x)}
          />
        )
      })}
    </div>
  )
}

const btnGroupStyle = {
  position: 'absolute',
  bottom: 10,
  left: 0,
  right: 0,
  backgroundColor: '#FCFBF8',
  borderRadius: '100px',
  display: 'flex',
  justifyContent: 'center',
  width: 'fit-content',
  margin: '0 auto',
  padding: '7px',
  zIndex: 2,
  // boxShadow: '0 3px 3px #09090915',
  '.dot': {
    width: '15px',
    height: '15px',
    borderRadius: '100px',
    border: '1px solid #000D80',
    margin: '0 5px',
    transition: 'all 200ms linear',
  },
  '.active': {
    backgroundColor: '#000D80',
  },
}
