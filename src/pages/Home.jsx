import { useRecoilValue } from 'recoil'

import { languageAtom, textAtom } from '../state/atoms'

export default function Home() {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return (
    <div css={homeStyle} className='bg-home'>
      <h1 className='pirata'>{text[lang].home.title1}</h1>
      <h1 className='pirata'>{text[lang].home.title2}</h1>
    </div>
  )
}

const homeStyle = {
  height: '100vh',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  padding: 'calc(96px + 40px) 0 0 80px',
  h1: {
    lineHeight: '156px',
  },
}
