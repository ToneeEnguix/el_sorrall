import { useRecoilState } from 'recoil'
import { languageAtom } from '../state/atoms'

import CatalanFlag from '../assets/catalonia.png'
import SpanishFlag from '../assets/spain.png'
import EnglishFlag from '../assets/united-kingdom.png'
import FrenchFlag from '../assets/france.png'

export default function LanguageSelector() {
  const [languageRecoil, setLanguageRecoil] = useRecoilState(languageAtom)

  return (
    <div>
      {Object.keys(languages).map((lang) => {
        return (
          <div onClick={() => setLanguageRecoil(lang)} key={lang}>
            <span>{languages[lang].txt}</span>
            <hr className={lang === languageRecoil ? `bg-${lang}` : ''}></hr>
          </div>
        )
      })}
    </div>
  )
}

const languages = {
  catalan: { icon: CatalanFlag, txt: 'CAT', filename: 'catalonia' },
  spanish: { icon: SpanishFlag, txt: 'ESP', filename: 'spain' },
  english: { icon: EnglishFlag, txt: 'ENG', filename: 'united-kingdom' },
  french: { icon: FrenchFlag, txt: 'FR', filename: 'france' },
}
