export interface Filling {
  name: string;
  slug: 'salade' | 'tomate' | 'oignon';
  image: string;
}

const fillings: Filling[] = [
  {
    name: 'Salade',
    slug: 'salade',
    image: '/assets/fillings/salade.png',
  },
  {
    name: 'Tomate',
    slug: 'tomate',
    image: '/assets/fillings/tomate.png',
  },
  {
    name: 'Oignon',
    slug: 'oignon',
    image: '/assets/fillings/oignon.png',
  },
];
export default fillings;