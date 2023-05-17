import React from 'react'

export default function Button(props) {
  return (
    <button
      className={`pointer white ${props.className}`}
      css={buttonStyle}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

const buttonStyle = {
  backgroundColor: '#050E80',
  borderRadius: '100px',
  border: '1px solid #050E80',
  padding: '0 2.5rem',
  height: '48px',
  transition: 'all 200ms linear',
  marginLeft: '1.75rem',
  letterSpacing: '1px',
  ':hover': {
    backgroundColor: '#FCFBF8',
    color: '#000D80',
  },
}
