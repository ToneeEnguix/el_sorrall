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
        where: 'Blanes',
        who: 'El Restaurant',
        contact: 'Contacte',
        reserve: 'Reservar',
      },
      home: {
        title1: 'Restaurant',
        title2: 'El Sorrall',
        subtitle: 'Gastronomia catalana',
      },
      products: {
        title: 'Els nostres plats casolans',
        subtitle:
          'Descobreix els nostres plats inspirats en receptes de la cuina tradicional catalana. El nostre objectiu principal és proporcionar plats que representin els sabors de la cuina clàssica de la nostra terra i amb això aportar un acostament a la gastronomia catalana.',
        dish1: 'Amanida d’alvocat',
        description1: 'En llit de tomàquet i llagostins',
        dish2: 'Confit d’ànec',
        description2: 'Amb una guarnició de puré de patata i compota de poma',
        dish3: 'Pastís calent de xocolata ',
        description3: 'Amb una bola de gelat de vainilla d’acompanyament',
        button: 'Carta completa',
      },
      blanes: {
        title: 'Blanes, primer poble de la costa brava',
        subtitle:
          'Deixa’t encantar pel poble que inicia el recorregut de la fantàstica Costa Brava catalana. Veuen a gaudir d’un dia de platja, de les milers de rutes de senderisme i de la calidesa dels seus habitants.',
        img1alt: 'detall de paret',
        img2alt: 'vela de veler',
        img3alt: 'pescador pelant al costat del mar',
        img4alt: 'senyor y senyora en banyador prenent el sol en una roca',
      },
      restaurant: {
        title: 'El Restaurant a la vora de la mar',
        subtitle:
          'El Sorrall esta situat en el passeig marítim a primera línia de mar, permetent als nostres clients una vista privilegiada mentre gaudeixen dels plats que servim. El nostre equip de professionals et faran sentir com a casa i amb ganes de tornar a fer-nos una visita.',
        img1alt: 'grup d’amics menjant en una gran taula',
        img2alt: 'detall de mans de xef mentre talla verdura',
        img3alt: 'detall de cap de xef concentrat',
      },
      footer: {
        p1_1: 'On ens pots trobar?',
        p1_2: 'Passeig de s’Abanell, 6, baixos, 17300 Blanes, Girona',
        p2: 'Telèfon de contacte: 972333420',
        p3_1: 'Obert tots els dies de 10 a 16 exceptuant',
        p3_2: 'els dimarts per descans del personal',
        p4: '(Les reserves no poden excedir els 6 comensals per motius logístics)',
      },
    },
    spanish: {
      navbar: {
        menu: 'Menú',
        where: 'Blanes',
        who: 'El Restaurante',
        contact: 'Contacto',
        reserve: 'Reservar',
      },
      home: {
        title1: 'Restaurante',
        title2: 'El Sorrall',
        subtitle: 'Gastronomia catalana',
      },
      products: {
        title: 'Nuestros platos caseros',
        subtitle:
          'Descubre nuestros platos inspirados en recetas  de la cocina tradicional catalana. Nuestro objetivo principal es proporcionar platos que representen los sabores de la cocina clásica de nuestra tierra y con ello aportar un acercamiento a la gastronomía catalana.',
        dish1: 'Ensalada de aguacate',
        description1: 'En cama de tomate y langostinos',
        dish2: 'Peladilla de pato',
        description2:
          'Con una guarnición de puré de patata y compota de manzana',
        dish3: 'Pastel caliente de chocolate',
        description3: 'Con una bola de helado de vainilla de acompañamiento',
        button: 'Carta completa',
      },
      blanes: {
        title: 'Blanes, primer pueblo de la costa Brava',
        subtitle:
          'Déjate encantar por el pueblo que inicia el recorrido de la fantástica Costa Brava catalana. Ven a disfrutar de un día de playa, de las miles de rutas de senderismo y de la calidez de sus habitantes.',
        img1alt: 'detalle de pared',
        img2alt: 'vela de barco',
        img3alt: 'pescador pelando al lado del mar',
        img4alt: 'señor y señora en bañador tomando el sol en una roca',
      },
      restaurant: {
        title: 'El Restaurant al lado del mar',
        subtitle:
          'El Sorrall está situado en el paseo marítimo a primera linea de mar, permitiendo a nuestros clientes una vista privilegiada mientras disfrutan de los platos que servimos. Nuestro equipo de profesionales te harán sentir como en casa y con ganas de volver a hacernos una visita.',
        img1alt: 'grupo de amigos comiendo en una gran mesa',
        img2alt: 'detalle de manos de chef mientras cortan verdura',
        img3alt: 'detalle de cabeza de chef concentrado',
      },
      footer: {
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
        where: 'Blanes',
        who: 'The Restaurant',
        contact: 'Contact',
        reserve: 'Reserve',
      },
      home: {
        title1: 'Restaurant',
        title2: 'El Sorrall',
        subtitle: 'Gastronomia catalana',
      },
      products: {
        title: 'Our Homemade Dishes',
        subtitle:
          'Discover our dishes inspired by traditional Catalan recipes. Our main objective is to provide dishes that represent the flavors of the classic cuisine of our land and thus provide an approach to Catalan cuisine.',
        dish1: 'Avocado salad',
        description1: 'With a tomato bed and prawns',
        dish2: 'Duck peeler',
        description2: 'With a side of mashed potato and applesauce',
        dish3: 'Hot chocolate cake',
        description3: 'With a bowl of vanilla ice cream',
        button: 'Full Menu',
      },
      blanes: {
        title: 'Blanes, the first town on the Costa Brava',
        subtitle:
          'Let yourself be enchanted by the town that begins the journey of the fantastic Catalan Costa Brava. Come and enjoy a day at the beach, the thousands of hiking trails and the warmth of its inhabitants.',
        img1alt: 'detail of wall',
        img2alt: 'boat sail',
        img3alt: 'fisherman peeling next to the sea',
        img4alt: 'old couple in swimsuits sunbathing on a rock',
      },
      restaurant: {
        title: 'The restaurant by the sea',
        subtitle:
          'The Sorrall is located on the seafront on the seafront, allowing our guests a privileged view while enjoying the dishes we serve. Our team of professionals will make you feel at home and eager to visit us again.',
        img1alt: 'group of friends eating in a big table',
        img2alt: 'detail of hands of xef while cutting vegetables',
        img3alt: 'detail of head of xef focused',
      },
      footer: {
        p1_1: 'Where can you find us?',
        p1_2: 'Passeig de s’Abanell, 6, baixos, 17300 Blanes, Girona',
        p2: 'Contact phone: 972333420',
        p3_1: 'Open every day from 10 to 16 except',
        p3_2: 'Tuesdays for staff break',
        p4: '(Reservations may not exceed 6 guests for logistical reasons)',
      },
    },
    french: {
      navbar: {
        menu: 'Menu',
        where: 'Blanes',
        who: 'Le Restaurant',
        contact: 'Contacte',
        reserve: 'Reserver',
      },
      home: {
        title1: 'Restaurant',
        title2: 'El Sorrall',
        subtitle: 'Gastronomia catalana',
      },
      products: {
        title: 'Nos plats faits maisonlats casolans',
        subtitle:
          'Découvrez nos plats inspirés des recettes catalanes traditionnelles. Notre objectif principal est de fournir des plats qui représentent les saveurs de la cuisine classique de notre pays et ainsi fournir une approche de la cuisine catalane.',
        dish1: 'Salade d’avocats',
        description1: 'Avec un lit de tomates et des crevettes',
        dish2: 'CoÉplucheur de canard',
        description2:
          'Avec un côté de purée de pommes de terre et de pommes de terre',
        dish3: 'Gâteau au chocolat chaud',
        description3: 'Avec un bol de glace vanille',
        button: 'Menu complet',
      },
      blanes: {
        title: 'Blanes, la première ville de la Costa Brava',
        subtitle:
          'Laissez-vous enchanter par la ville qui commence le voyage de la fantastique Costa Brava catalane. Venez profiter d’une journée à la plage, les milliers de sentiers de randonnée et la chaleur de ses habitants.',
        img1alt: 'détail du mur',
        img2alt: 'voile de bateau',
        img3alt: 'pêcheur pêchant en bord de mer',
        img4alt:
          'monsieur et madame en maillot de bain prenant un bain de soleil sur un rocher',
      },
      restaurant: {
        title: 'Le restaurant au bord de la mer',
        subtitle:
          'Le Sorrall est situé sur le front de mer sur le front de mer, permettant à nos clients une vue privilégiée tout en appréciant les plats que nous servons. Notre équipe de professionnels vous fera sentir à la maison et désireux de nous rendre visite à nouveau.',
        img1alt: 'groupe d’amis mangeant à une grande table',
        img2alt: 'détail des mains du chef tout en coupant des légumes',
        img3alt: 'détail de la tête du chef concentré',
      },
      footer: {
        p1_1: 'Où pouvez-vous nous trouver?',
        p1_2: 'Passeig de s’Abanell, 6 ans, baixos, 17300 Blanes, Gérone',
        p2: 'Téléphone de contact : 972333420',
        p3_1: 'Ouvert tous les jours de 10 à 16',
        p3_2: 'sauf le mardi pour les pauses',
        p4: '(Les réservations ne peuvent pas dépasser 6 personnes pour des raisons logistiques)',
      },
    },
  },
})
