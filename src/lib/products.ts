import type { Product } from './types';

export const products: Product[] = [
  // Soaps (5 varieties)
  {
    id: 'soap-1',
    name: 'Neem Soap',
    category: 'soaps',
    description: 'A natural soap infused with neem extracts, known for its antibacterial and purifying properties. Excellent for keeping skin clear and healthy.',
    price: 45,
    image: '/neemsoap.jpg',
    dataAiHint: 'neem soap'
  },
  {
    id: 'soap-2',
    name: 'Citrus Burst Soap',
    category: 'soaps',
    description: 'Energize your senses with a zesty blend of lemon, orange, and grapefruit. A refreshing start to your day.',
    price: 7.99,
    image: 'https://picsum.photos/600/400',
    dataAiHint: 'citrus soap'
  },
  {
    id: 'soap-3',
    name: 'Oatmeal & Honey Soap',
    category: 'soaps',
    description: 'Gently exfoliate and moisturize with the natural goodness of oatmeal and raw honey. Ideal for sensitive skin.',
    price: 8.49,
    image: 'https://picsum.photos/600/400',
    dataAiHint: 'oatmeal soap'
  },
  {
    id: 'soap-4',
    name: 'Charcoal Detox Soap',
    category: 'soaps',
    description: 'Activated charcoal works to draw out impurities, leaving your skin feeling clean and purified.',
    price: 8.99,
    image: 'https://picsum.photos/600/400',
    dataAiHint: 'charcoal soap'
  },
  {
    id: 'soap-5',
    name: 'Minty Fresh Soap',
    category: 'soaps',
    description: 'A cool and invigorating soap with peppermint and tea tree oil. Provides a tingly clean feeling.',
    price: 7.99,
    image: 'https://picsum.photos/600/400',
    dataAiHint: 'mint soap'
  },
  // Health Mix (2 types)
  {
    id: 'hm-1',
    name: 'Super Grains Health Mix',
    category: 'health-mixes',
    description: 'A powerful blend of 15 different grains, nuts, and seeds. A wholesome addition to your daily diet.',
    price: 15.99,
    image: 'https://picsum.photos/600/400',
    dataAiHint: 'health food'
  },
  {
    id: 'hm-2',
    name: 'Chocolate Protein Health Mix',
    category: 'health-mixes',
    description: 'A delicious and nutritious mix packed with plant-based protein and rich cocoa. Perfect for post-workout recovery.',
    price: 18.99,
    image: 'https://picsum.photos/600/400',
    dataAiHint: 'protein powder'
  },
];
