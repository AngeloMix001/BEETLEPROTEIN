
import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'mani-chocolate',
    name: 'Mani Chocolate',
    tagline: 'Premium Protein Bar',
    price: 4.50,
    description: 'Intensidad de cacao oscuro con el balance perfecto de maní tostado y un toque de sal marina. 20g de proteína de alta biodisponibilidad para un rendimiento excepcional.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsKZ977Lg2-5CEK8aT4ZJJjMVmRmkngg_92fq0iNhonWc7HCi8BO0TyU4Ib8u_OU1EzZmj68l4p_ZztuOnKpSwOSimvcZ7C89L3OQ15zg_oI70_lePsB9o0r8Ds58qrFrPedk3WGJciRXPVU86CfB1opqk1loVLfr61hI7HE6MaQE1C7cAWRsMhs5DEp-7rG6rf4i02VQv_4ZoZvA2x4LUkcjP9FF1WVn6oE01yh55155q6AItt1imCh2t7tNulCY3IR3yGuO3LA',
    flavorProfile: 'Cacao Profundo',
    texture: 'Crujiente y suave',
    nutrition: {
      protein: '20g',
      sugar: '0%',
      sustainable: '100%',
      glutenFree: true
    },
    accentColor: '#3d2b1f'
  },
  {
    id: 'berries',
    name: 'Berries',
    tagline: 'Premium Protein Bar',
    price: 4.50,
    description: 'Explosión natural de frutos rojos silvestres con proteína de alto rendimiento y frescura cítrica.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcVkkph8ew1F7moqSZvpNj6DtjzWMGofki83EMxHJZof6aTjCMt62rIFH96DjHpQnnsYzYRoYTqM2ImDNktCSQkajfmhowU4PRKxwS8S0HIS5P81xDRypTTV5nTdHX1sUCsYGaCnKeLyd1D4KrT3W6cGOfkQKLJrC_RLQPAKKwyNG0l-sjW3efHgCh3h9CZRzXxZcrCqbCKmpy9YvYCNkvUgJmqY774ndML9cKxO9QLA0Yk56EcfKEMZI4JD1s4TF6u4r2LYf8Dg',
    flavorProfile: 'Frambuesa Oscura',
    texture: 'Suave y Afrutado',
    nutrition: {
      protein: '20g',
      sugar: '0%',
      sustainable: '100%',
      glutenFree: true
    },
    accentColor: '#4A0E0E'
  }
];

export const REVIEWS: Review[] = [
  {
    name: "Elena R.",
    role: "Triatleta IronMan",
    text: "La pureza de los ingredientes es inigualable. Beetle Protein es mi aliado en cada competencia.",
    rating: 5,
    icon: "workspace_premium"
  },
  {
    name: "Marc S.",
    role: "Atleta de Crossfit Elite",
    text: "Sabor sofisticado y rendimiento real. Finalmente una proteína sostenible que cumple lo que promete.",
    rating: 5,
    icon: "trophy"
  },
  {
    name: "Dr. Javier L.",
    role: "Especialista en Medicina Deportiva",
    text: "La biodisponibilidad se nota en la recuperación. Es nutrición de vanguardia.",
    rating: 5,
    icon: "verified"
  }
];

export const FAQS = [
  {
    question: "¿Por qué elegir proteína de insectos?",
    answer: "Es una de las fuentes más sostenibles del planeta, utilizando 2000 veces menos agua que la proteína tradicional y emitiendo 100 veces menos CO2."
  },
  {
    question: "¿Cuánta proteína contiene cada barra?",
    answer: "Cada barra aporta 20g de proteína de alta biodisponibilidad, diseñada para la recuperación muscular elite."
  },
  {
    question: "¿Es apta para dietas específicas?",
    answer: "Nuestras barras son naturales, libres de aditivos artificiales, sin gluten y diseñadas para el máximo rendimiento deportivo."
  }
];
