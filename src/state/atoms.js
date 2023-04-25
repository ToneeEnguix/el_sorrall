import { atom } from 'recoil'

export const languageAtom = atom({
  key: 'languageAtom',
  default: 'catalan',
})

export const textAtom = atom({
  key: 'textAtom',
  default: {
    catalan: {
      home: { title: 'Benvinguts' },
    },
    spanish: {
      home: { title: 'Bienvenidos' },
    },
    english: {
      home: { title: 'Welcome' },
    },
    french: {
      home: { title: 'Bienvenue' },
    },
  },
})
