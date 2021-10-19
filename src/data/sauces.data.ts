export interface Sauce {
  name: string;
  slug: string;
  image: string;
}

const sauces: Sauce[] = [
  {
    name: 'Blanche',
    slug: 'blanche',
    image: '/assets/sauces/blanche.png',
  },
  {
    name: 'Harissa',
    slug: 'harissa',
    image: '/assets/sauces/harissa.png',
  },
  {
    name: 'Andalouse',
    slug: 'andalouse',
    image: '/assets/sauces/andalouse.png',
  },
  {
    name: 'BBQ',
    slug: 'bbq',
    image: '/assets/sauces/bbq.png',
  },
  {
    name: 'Ketchup',
    slug: 'ketchup',
    image: '/assets/sauces/ketchup.png',
  },
  {
    name: 'Curry',
    slug: 'curry',
    image: '/assets/sauces/curry.png',
  },
];
export default sauces