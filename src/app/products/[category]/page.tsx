import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, List } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BackButton } from '@/components/BackButton';

type Props = {
  params: { category: string };
};

export default function CategoryPage({ params }: Props) {
  const { category } = params;
  const filteredProducts = products.filter(p => p.category === category);

  if (filteredProducts.length === 0) {
    notFound();
  }

  const categoryTitle = category === 'soaps' ? 'Soaps' : 'Health Mixes';

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10">
        <BackButton />
      </div>
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground pt-16">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{categoryTitle}</span>
      </div>
      <h1 className="text-4xl font-headline font-bold mb-8">{categoryTitle}</h1>
      
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all"><List className="mr-2" />All</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="pt-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
