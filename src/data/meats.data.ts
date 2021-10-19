export interface Meat {
  name: string;
  slug: string;
  image: string;
}

const meats: Meat[] = [
  {
    name: 'Viande',
    slug: 'viande',
    image: '/assets/meats/viande.png',
  },
  {
    name: 'Tofu',
    slug: 'tofu',
    image: '/assets/meats/tofu.png',
  },
];
export default meats;