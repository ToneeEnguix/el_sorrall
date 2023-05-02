import React from 'react'

export default function Products() {
  return (
    <div css={productsStyle}>
      <h2>Els nostres plats</h2>
      <Grid />
    </div>
  )
}

const productsStyle = {
  minHeight: '100vh',
  padding: '180px 80px',
}

const Grid = () => {}
