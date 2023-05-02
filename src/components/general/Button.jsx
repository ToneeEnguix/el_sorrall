import React from 'react'

export default function Button(props) {
  return (
    <button className='pointer white' css={buttonStyle}>
      {props.children}
    </button>
  )
}

const buttonStyle = {
  backgroundColor: '#050E80',
  borderRadius: '100px',
  border: 'none',
  padding: '0 2.5rem',
  height: '48px',
  transition: 'all 200ms linear',
  marginLeft: '1.75rem',
  ':hover': {
    backgroundColor: 'yellow',
  },
}
