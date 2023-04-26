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
      home: { title: 'Benvinguts' },
    },
    spanish: {
      navbar: {
        menu: 'Menú',
        who: 'Quién somos?',
        where: 'Dónde estamos?',
        contact: 'Contacto',
        reserve: 'Reserva',
      },
      home: { title: 'Bienvenidos' },
    },
    english: {
      navbar: {
        menu: 'Menu',
        who: 'About',
        where: 'Location',
        contact: 'Contact',
        reserve: 'Reserve',
      },
      home: { title: 'Welcome' },
    },
    french: {
      navbar: {
        menu: 'Menu',
        who: 'merde',
        where: 'alors',
        contact: 'la',
        reserve: 'france',
      },
      home: { title: 'Bienvenue' },
    },
  },
})
