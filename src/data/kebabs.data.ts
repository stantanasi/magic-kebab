export interface Kebab {
  name: string;
  slug: string;
  price: number;
  bread: 'pain' | 'galette';
  meat: 'viande' | 'tofu';
  fillings: ('salade' | 'tomate' | 'oignon')[];
  sauces: ('blanche' | 'harissa' | 'andalouse' | 'bbq' | 'ketchup' | 'curry')[];
};

const kebabs: Kebab[] = [
  {
    name: 'Le Classique',
    slug: 'classic',
    price: 5.50,
    bread: 'pain',
    meat: 'viande',
    fillings: ['salade', 'tomate', 'oignon'],
    sauces: ['blanche'],
  },
  {
    name: 'Le Vege',
    slug: 'vege',
    price: 6.00,
    bread: 'pain',
    meat: 'tofu',
    fillings: [],
    sauces: ['blanche'],
  },
  {
    name: 'Le BBQ',
    slug: 'bbq',
    price: 6.00,
    bread: 'pain',
    meat: 'viande',
    fillings: ['salade', 'tomate', 'oignon'],
    sauces: ['bbq'],
  },
];
export default kebabs