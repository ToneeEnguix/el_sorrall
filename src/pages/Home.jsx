import { useRecoilValue } from 'recoil'
import { languageAtom, textAtom } from '../state/atoms'

export default function Home() {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return (
    <div css={homeStyle} className='bg-home'>
      {text[lang].home.title}
    </div>
  )
}

const homeStyle = {
  minHeight: '110vh',
  paddingTop: '50px',
}
