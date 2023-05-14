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
      products: {
        title: 'Els nostres plats casolans',
        subtitle:
          'Descubre nuestros platos inspirados en recetas de la cocina tradicional catalana. Nuestro objetivo principal es proporcionar platos que representen los sabores de la cocina clásica de nuestra tierra y con ello aportar un acercamiento a la gastronomía catalana.',
        dish1: 'Amanida d’alvocat',
        description1: 'Amb un llit tomàquet i llagostins',
        dish2: 'Confit d’ánec',
        description2: 'Amb una guarnició de puré de patata i compota de poma',
        dish3: 'Pastís calent de xocolata',
        description3: 'Amb una bola de gelat de vainilla d’acompanyament',
        button: 'Visualitza',
      },
      blanes: {
        title: 'Blanes, primer poble de la costa brava',
        subtitle:
          'Déjate encantar por el pueblo que inicia el recorrido de la fantástica Costa Brava catalana. Ven a disfrutar de un día de playa, de las miles de rutas de senderismo y de la calidez de sus habitantes.',
        img1alt: 'detalle de pared',
        img2alt: 'vela de barco',
        img3alt: 'pescador pelando al lado del mar',
        img4alt: 'señor y señora en bañador tomando al sol en una roca',
      },
      restaurant: {
        title: 'El Restaurant a la vora de la mar',
        subtitle:
          'El Sorrall esta situado en el paseo marítimo a primera linea de mar, permitiendo a nuestros clientes una vista privilegiada mientras disfrutan de los platos que servimos. Nuestro equipo de profesionales te harán sentir como en casa y con ganas de volver a hacernos una visita.',
        img1alt: 'grupo de amigos comiendo en una gran mesa',
        img2alt: 'detalle de manos de chef mientras cortan verdura',
        img3alt: 'detalle de cabeza de chef concentrado',
      },
      footer: {
        subtitle: 'Gastronomia catalana',
        p1_1: '¿Dónde nos puedes encontrar?',
        p1_2: 'Passeig de s’Abanell, 6, baixos, 17300 Blanes, Girona',
        p2: 'Telefono de contacto: 972333420',
        p3_1: 'Abierto todos los días de 10 a 16 exceptuando',
        p3_2: 'los martes por descanso del personal',
        p4: '(Las reservas no pueden exceder los 6 comensales por motivos logistícos)',
      },
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
      products: {
        title: 'Els nostres plats casolans',
        subtitle:
          'Descubre nuestros platos inspirados en recetas de la cocina tradicional catalana. Nuestro objetivo principal es proporcionar platos que representen los sabores de la cocina clásica de nuestra tierra y con ello aportar un acercamiento a la gastronomía catalana.',
        dish1: 'Amanida d’alvocat',
        description1: 'Amb un llit tomàquet i llagostins',
        dish2: 'Confit d’ánec',
        description2: 'Amb una guarnició de puré de patata i compota de poma',
        dish3: 'Pastís calent de xocolata',
        description3: 'Amb una bola de gelat de vainilla d’acompanyament',
        button: 'Visualitza',
      },
      blanes: {
        title: 'Blanes, primer poble de la costa brava',
        subtitle:
          'Déjate encantar por el pueblo que inicia el recorrido de la fantástica Costa Brava catalana. Ven a disfrutar de un día de playa, de las miles de rutas de senderismo y de la calidez de sus habitantes.',
        img1alt: 'detalle de pared',
        img2alt: 'vela de barco',
        img3alt: 'pescador pelando al lado del mar',
        img4alt: 'señor y señora en bañador tomando al sol en una roca',
      },
      restaurant: {
        title: 'El Restaurant a la vora de la mar',
        subtitle:
          'El Sorrall esta situado en el paseo marítimo a primera linea de mar, permitiendo a nuestros clientes una vista privilegiada mientras disfrutan de los platos que servimos. Nuestro equipo de profesionales te harán sentir como en casa y con ganas de volver a hacernos una visita.',
        img1alt: 'grupo de amigos comiendo en una gran mesa',
        img2alt: 'detalle de manos de chef mientras cortan verdura',
        img3alt: 'detalle de cabeza de chef concentrado',
      },
      footer: {
        subtitle: 'Gastronomia catalana',
        p1_1: '¿Dónde nos puedes encontrar?',
        p1_2: 'Passeig de s’Abanell, 6, baixos, 17300 Blanes, Girona',
        p2: 'Telefono de contacto: 972333420',
        p3_1: 'Abierto todos los días de 10 a 16 exceptuando',
        p3_2: 'los martes por descanso del personal',
        p4: '(Las reservas no pueden exceder los 6 comensales por motivos logistícos)',
      },
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
      products: {
        title: 'Els nostres plats casolans',
        subtitle:
          'Descubre nuestros platos inspirados en recetas de la cocina tradicional catalana. Nuestro objetivo principal es proporcionar platos que representen los sabores de la cocina clásica de nuestra tierra y con ello aportar un acercamiento a la gastronomía catalana.',
        dish1: 'Amanida d’alvocat',
        description1: 'Amb un llit tomàquet i llagostins',
        dish2: 'Confit d’ánec',
        description2: 'Amb una guarnició de puré de patata i compota de poma',
        dish3: 'Pastís calent de xocolata',
        description3: 'Amb una bola de gelat de vainilla d’acompanyament',
        button: 'Visualitza',
      },
      blanes: {
        title: 'Blanes, primer poble de la costa brava',
        subtitle:
          'Déjate encantar por el pueblo que inicia el recorrido de la fantástica Costa Brava catalana. Ven a disfrutar de un día de playa, de las miles de rutas de senderismo y de la calidez de sus habitantes.',
        img1alt: 'detalle de pared',
        img2alt: 'vela de barco',
        img3alt: 'pescador pelando al lado del mar',
        img4alt: 'señor y señora en bañador tomando al sol en una roca',
      },
      restaurant: {
        title: 'El Restaurant a la vora de la mar',
        subtitle:
          'El Sorrall esta situado en el paseo marítimo a primera linea de mar, permitiendo a nuestros clientes una vista privilegiada mientras disfrutan de los platos que servimos. Nuestro equipo de profesionales te harán sentir como en casa y con ganas de volver a hacernos una visita.',
        img1alt: 'grupo de amigos comiendo en una gran mesa',
        img2alt: 'detalle de manos de chef mientras cortan verdura',
        img3alt: 'detalle de cabeza de chef concentrado',
      },
      footer: {
        subtitle: 'Gastronomia catalana',
        p1_1: '¿Dónde nos puedes encontrar?',
        p1_2: 'Passeig de s’Abanell, 6, baixos, 17300 Blanes, Girona',
        p2: 'Telefono de contacto: 972333420',
        p3_1: 'Abierto todos los días de 10 a 16 exceptuando',
        p3_2: 'los martes por descanso del personal',
        p4: '(Las reservas no pueden exceder los 6 comensales por motivos logistícos)',
      },
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
      products: {
        title: 'Els nostres plats casolans',
        subtitle:
          'Descubre nuestros platos inspirados en recetas de la cocina tradicional catalana. Nuestro objetivo principal es proporcionar platos que representen los sabores de la cocina clásica de nuestra tierra y con ello aportar un acercamiento a la gastronomía catalana.',
        dish1: 'Amanida d’alvocat',
        description1: 'Amb un llit tomàquet i llagostins',
        dish2: 'Confit d’ánec',
        description2: 'Amb una guarnició de puré de patata i compota de poma',
        dish3: 'Pastís calent de xocolata',
        description3: 'Amb una bola de gelat de vainilla d’acompanyament',
        button: 'Visualitza',
      },
      blanes: {
        title: 'Blanes, primer poble de la costa brava',
        subtitle:
          'Déjate encantar por el pueblo que inicia el recorrido de la fantástica Costa Brava catalana. Ven a disfrutar de un día de playa, de las miles de rutas de senderismo y de la calidez de sus habitantes.',
        img1alt: 'detalle de pared',
        img2alt: 'vela de barco',
        img3alt: 'pescador pelando al lado del mar',
        img4alt: 'señor y señora en bañador tomando al sol en una roca',
      },
      restaurant: {
        title: 'El Restaurant a la vora de la mar',
        subtitle:
          'El Sorrall esta situado en el paseo marítimo a primera linea de mar, permitiendo a nuestros clientes una vista privilegiada mientras disfrutan de los platos que servimos. Nuestro equipo de profesionales te harán sentir como en casa y con ganas de volver a hacernos una visita.',
        img1alt: 'grupo de amigos comiendo en una gran mesa',
        img2alt: 'detalle de manos de chef mientras cortan verdura',
        img3alt: 'detalle de cabeza de chef concentrado',
      },
      footer: {
        subtitle: 'Gastronomia catalana',
        p1_1: '¿Dónde nos puedes encontrar?',
        p1_2: 'Passeig de s’Abanell, 6, baixos, 17300 Blanes, Girona',
        p2: 'Telefono de contacto: 972333420',
        p3_1: 'Abierto todos los días de 10 a 16 exceptuando',
        p3_2: 'los martes por descanso del personal',
        p4: '(Las reservas no pueden exceder los 6 comensales por motivos logistícos)',
      },
    },
  },
})
