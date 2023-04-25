import { useRecoilValue } from 'recoil'
import { languageAtom, textAtom } from '../state/atoms'

export default function Home() {
  const lang = useRecoilValue(languageAtom)
  const text = useRecoilValue(textAtom)

  return <div css={homeStyle}>{text[lang].home.title}</div>
}

const homeStyle = {
  minHeight: '200vh',
}
