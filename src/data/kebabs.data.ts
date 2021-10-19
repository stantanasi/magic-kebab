export interface Kebab {
  name: string;
  slug: string;
  price: number;
};

const kebabs: Kebab[] = [
  {
    name: 'Le Classique',
    slug: 'classic',
    price: 5.50,
  },
  {
    name: 'Le Vege',
    slug: 'vege',
    price: 6.00,
  },
  {
    name: 'Le BBQ',
    slug: 'bbq',
    price: 6.00,
  },
];
export default kebabs