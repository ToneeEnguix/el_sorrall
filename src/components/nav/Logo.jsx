import logo from '../../assets/imgs/logo.webp'

export default function Logo() {
  return (
    <div css={logoStyle}>
      <img alt='logo' src={logo} />
    </div>
  )
}

const logoStyle = {
  img: {
    height: '100px',
    width: '105px',
  },
}
