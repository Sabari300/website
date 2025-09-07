import { DescriptionGeneratorForm } from '@/components/DescriptionGeneratorForm';
import { Sparkles } from 'lucide-react';

export default function GenerateDescriptionPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Sparkles className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-headline font-bold">AI Product Description Generator</h1>
        <p className="text-muted-foreground mt-2">
          Fill in the product details below to generate a compelling e-commerce description.
        </p>
      </div>
      <DescriptionGeneratorForm />
    </div>
  );
}
