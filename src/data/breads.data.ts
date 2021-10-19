export interface Bread {
  name: string;
  slug: string;
  image: string;
}

const breads: Bread[] = [
  {
    name: 'Pain',
    slug: 'pain',
    image: '/assets/breads/pain.png',
  },
  {
    name: 'Galette',
    slug: 'galette',
    image: '/assets/breads/galette.png',
  },
];
export default breads;