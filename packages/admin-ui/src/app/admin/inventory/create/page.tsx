import { Button } from '@/components/theme';

import { ProductDetails } from '../components';

export default function CreateProductPage() {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-foreground font-bold text-3xl">Crear producto</h1>
        <div className="flex gap-4">
          <Button color="primary" type="submit">
            Guardar producto
          </Button>
        </div>
      </div>
      <ProductDetails />
    </form>
  );
}
