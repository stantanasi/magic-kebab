export interface Sauce {
  name: string;
  slug: string;
  image: string;
}

const sauces: Sauce[] = [
  {
    name: 'Blanche',
    slug: 'blanche',
    image: `${process.env.PUBLIC_URL}/assets/sauces/blanche.png`,
  },
  {
    name: 'Harissa',
    slug: 'harissa',
    image: `${process.env.PUBLIC_URL}/assets/sauces/harissa.png`,
  },
  {
    name: 'Andalouse',
    slug: 'andalouse',
    image: `${process.env.PUBLIC_URL}/assets/sauces/andalouse.png`,
  },
  {
    name: 'BBQ',
    slug: 'bbq',
    image: `${process.env.PUBLIC_URL}/assets/sauces/bbq.png`,
  },
  {
    name: 'Ketchup',
    slug: 'ketchup',
    image: `${process.env.PUBLIC_URL}/assets/sauces/ketchup.png`,
  },
  {
    name: 'Curry',
    slug: 'curry',
    image: `${process.env.PUBLIC_URL}/assets/sauces/curry.png`,
  },
];
export default sauces