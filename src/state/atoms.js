import { atom } from 'recoil'

export const languageAtom = atom({
  key: 'languageAtom',
  default: 'catalan',
})

export const textAtom = atom({
  key: 'textAtom',
  default: {
    catalan: {
      navbar: {
        menu: 'Menu',
        who: 'Qui som?',
        where: 'On som?',
        contact: 'Contacte',
        reserve: 'Reserva',
      },
      home: { title1: 'Restaurant', title2: 'El Sorrall' },
    },
    spanish: {
      navbar: {
        menu: 'Menú',
        who: 'Quién somos?',
        where: 'Dónde estamos?',
        contact: 'Contacto',
        reserve: 'Reserva',
      },
      home: { title1: 'Restaurant', title2: 'El Sorrall' },
    },
    english: {
      navbar: {
        menu: 'Menu',
        who: 'About',
        where: 'Location',
        contact: 'Contact',
        reserve: 'Reserve',
      },
      home: { title1: 'Restaurant', title2: 'El Sorrall' },
    },
    french: {
      navbar: {
        menu: 'Menu',
        who: 'france',
        where: 'france',
        contact: 'la',
        reserve: 'france',
      },
      home: { title1: 'Restaurant', title2: 'El Sorrall' },
    },
  },
})
