'use client';

import { Loader2Icon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import { type FC, useState } from 'react';

import { Button } from '@/components/theme';
import { notification } from '@/lib/notification';
import { type Category, type ProductWithCategories } from '@/lib/types';

import { removeProductsFromCategory } from '../actions';

export const ProductCategoryCard: FC<Props> = ({ product, category }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveProduct = async (productId: string) => {
    setIsLoading(true);
    await removeProductsFromCategory(category?.id ?? '', productId);
    setIsLoading(false);
    notification.success('Producto eliminado de la categoría');
  };
  return (
    <div key={product.id} className="flex justify-between items-center p-2 rounded-md">
      <div className="flex gap-4 items-center">
        {product.image ? (
          <Image
            width={48}
            height={48}
            src={product.image}
            alt={product.name}
            className="h-10 w-10 rounded-md object-cover"
          />
        ) : (
          <div className="h-10 w-10 rounded-md bg-gray-300" />
        )}
        <span>{product.name}</span>
      </div>
      <div>
        <span>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(product.price)}
        </span>
      </div>
      <div>
        <Button
          onClick={async () => await handleRemoveProduct(product.id)}
          variant="ghost"
          className="w-fit hover:bg-destructive dark:hover:bg-destructive "
          type="button"
          disabled={isLoading}
        >
          {isLoading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
          <Trash2Icon size={16} />
        </Button>
      </div>
    </div>
  );
};

type Props = {
  product: ProductWithCategories;
  category: Category;
};
