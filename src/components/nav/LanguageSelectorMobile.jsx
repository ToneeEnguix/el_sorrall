import React from 'react'
import { useRecoilState } from 'recoil'

import { languageAtom } from '../../state/atoms'

import CatalanFlag from '../../assets/imgs/catalonia.png'
import SpanishFlag from '../../assets/imgs/spain.png'
import EnglishFlag from '../../assets/imgs/united-kingdom.png'
import FrenchFlag from '../../assets/imgs/france.png'

export default function LanguageSelectorMobile() {
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
            <p className={`${lang === languageRecoil ? 'active' : ''}`}>
              {languages[lang].txt}
            </p>
          </div>
        )
      })}
    </div>
  )
}

const selectorStyle = {
  p: {
    transition: 'all 200ms linear',
    width: 'fit-content',
    margin: '0 auto 1.25rem',
  },
  '.active': {
    backgroundColor: '#000D80',
    borderRadius: '24px',
    padding: '3px 8px',
    color: '#FDF8E7',
  },
}

const languages = {
  catalan: { icon: CatalanFlag, txt: 'CAT' },
  english: { icon: EnglishFlag, txt: 'EN' },
  spanish: { icon: SpanishFlag, txt: 'ES' },
  french: { icon: FrenchFlag, txt: 'FR' },
}
