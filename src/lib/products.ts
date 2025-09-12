
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
    name: 'Alovera Soap',
    category: 'soaps',
    description: 'Soothe and moisturize your skin with the gentle touch of pure Aloe Vera. Perfect for daily hydration and calming irritation.',
    price: 45,
    image: '/alovera.jpg',
    dataAiHint: 'aloe vera soap'
  },
  {
    id: 'soap-3',
    name: 'papaya Soap',
    category: 'soaps',
    description: 'Gently exfoliate and moisturize with the natural goodness of oatmeal and raw honey. Ideal for sensitive skin.',
    price: 45,
    image: '/papaya.jpg',
    dataAiHint: 'papaya soap'
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
