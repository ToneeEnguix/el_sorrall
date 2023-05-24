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
  background:
    'linear-gradient(250.09deg, rgba(0, 251, 160, 0.4) -3.32%, rgba(0, 121, 189, 0.44) 57.04%), linear-gradient(289.66deg, rgba(0, 47, 168, 0.21) -30.15%, rgba(208, 237, 253, 0.7) 78.38%), linear-gradient(356.79deg, #006DEE 1.92%, #002865 56.19%)',
  borderRadius: '100px',
  border: 'none',
  padding: '0 2.5rem',
  height: '48px',
  marginLeft: '1.75rem',
  letterSpacing: '1px',
  border: '1px solid transparent',
  ':hover': {
    background: '#5299FF',
  },
  ':active': {
    transition: 'all 200ms linear',
    background: '#FCFBF8',
    color: '#00204D',
    border: '1px solid #5299FF',
  },
}
