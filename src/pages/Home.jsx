import { useRecoilValue } from 'recoil'
import facepaint from 'facepaint'

import { languageAtom, textAtom } from '../state/atoms'

// RESPONSIVENESS SETTINGS
const breakpoints = [800, 1000]
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export default function Home() {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return (
    <div css={homeStyle} className='bg-home'>
      <h1>{text[lang].home.title1}</h1>
      <h1>{text[lang].home.title2}</h1>
      <h3 className='home_subtitle'>{text[lang].home.subtitle}</h3>
    </div>
  )
}

const homeStyle = mq({
  height: '100vh',
  backgroundPosition: 'left',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  padding: [
    'calc(96px + 40px) 0 0 40px',
    'calc(96px + 40px) 0 0 40px',
    'calc(96px + 40px) 0 0 80px',
  ],
  h1: {
    lineHeight: '156px',
  },
  h3: {
    color: '#fdf8e7',
    margin: 0,
  },
})
