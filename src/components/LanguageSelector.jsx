import { useRecoilState } from 'recoil'
import { languageAtom } from '../state/atoms'

import CatalanFlag from '../assets/catalonia.png'
import SpanishFlag from '../assets/spain.png'
import EnglishFlag from '../assets/united-kingdom.png'
import FrenchFlag from '../assets/france.png'

export default function LanguageSelector() {
  const [languageRecoil, setLanguageRecoil] = useRecoilState(languageAtom)

  return (
    <div css={selectorStyle}>
      {Object.keys(languages).map((lang) => {
        return (
          <div
            className='item pointer'
            onClick={() => setLanguageRecoil(lang)}
            key={lang}
          >
            <span>{languages[lang].txt}</span>
            <hr className={lang === languageRecoil ? `bg-${lang}` : ''}></hr>
          </div>
        )
      })}
    </div>
  )
}

const languages = {
  catalan: { icon: CatalanFlag, txt: 'CAT' },
  spanish: { icon: SpanishFlag, txt: 'ESP' },
  english: { icon: EnglishFlag, txt: 'ENG' },
  french: { icon: FrenchFlag, txt: 'FR' },
}

const selectorStyle = {
  display: 'flex',
  alignItems: 'center',
  '.item': {
    marginLeft: '1rem',
    transition: 'all 200ms linear',
    ':hover': {
      color: 'gray',
    },
    hr: {
      margin: 0,
      height: '3px',
      border: 'none',
      backgroundSize: 'cover',
    },
  },
}
