import { useRecoilState } from 'recoil'
import { languageAtom } from '../../state/atoms'

import CatalanFlag from '../../assets/imgs/catalonia.png'
import SpanishFlag from '../../assets/imgs/spain.png'
import EnglishFlag from '../../assets/imgs/united-kingdom.png'
import FrenchFlag from '../../assets/imgs/france.png'

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
            tabIndex='0'
          >
            <span
              className={`white ${lang === languageRecoil ? 'active' : ''}`}
            >
              {languages[lang].txt}
            </span>
            <hr className={lang === languageRecoil ? `bg-${lang}` : ''}></hr>
          </div>
        )
      })}
    </div>
  )
}

const languages = {
  catalan: { icon: CatalanFlag, txt: 'CAT' },
  english: { icon: EnglishFlag, txt: 'EN' },
  spanish: { icon: SpanishFlag, txt: 'ES' },
  french: { icon: FrenchFlag, txt: 'FR' },
}

const selectorStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: '-.3rem 0 0 1rem',
  '.item': {
    marginLeft: '1rem',
    span: {
      transition: 'all 200ms linear',
      ':hover': {
        color: 'gray',
      },
    },
    hr: {
      margin: 0,
      height: '3px',
      border: 'none',
      backgroundSize: 'cover',
    },
  },
  '.active': {
    color: '#050E80 !important',
  },
}
