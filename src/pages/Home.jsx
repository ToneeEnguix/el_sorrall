import { useRecoilValue } from 'recoil'
import { languageAtom, textAtom } from '../state/atoms'

export default function Home() {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return (
    <div css={homeStyle} className='bg-home'>
      <h1 className='pirata'>Restaurant</h1>
      <h1 className='pirata'>El Sorrall</h1>
      {/* {text[lang].home.title} */}
    </div>
  )
}

const homeStyle = {
  minHeight: '110vh',
  paddingTop: '145px',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  padding: '10rem 11rem 0',
  h1: {
    color: '#FEF8E7',
    fontSize: '9rem',
    margin: 0,
    letterSpacing: '2px',
  },
}
