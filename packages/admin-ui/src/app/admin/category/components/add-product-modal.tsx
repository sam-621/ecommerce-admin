import { BoxesIcon, CheckIcon } from 'lucide-react';
import Image from 'next/image';
import { type FC } from 'react';

import { Dialog, Input } from '@/components/theme';
import { type ProductWithCategories } from '@/lib/types';

export const AddProductModal: FC<Props> = ({ products, category }) => {
  return (
    <Dialog
      trigger={{ text: 'Agregar producto', variant: 'secondary' }}
      header={{
        title: 'Agregar productos',
        description: `Agrega productos a ${category.name}`
      }}
    >
      <div className="flex flex-col gap-4">
        <Input placeholder="Encontrar productos" />
        <div className="flex flex-col gap-4">
          {products.map(p => (
            <div
              key={p.id}
              className="flex justify-between items-center p-2 rounded-md hover:bg-accent"
            >
              <div className="flex gap-4 items-center">
                {p.image ? (
                  <Image width={48} height={48} src={p.image} alt={p.name} />
                ) : (
                  <div className="flex justify-center items-center bg-neutral-100 rounded-md w-12 h-12 dark:bg-neutral-900">
                    <BoxesIcon className="text-neutral-700 dark:text-neutral-500" />
                  </div>
                )}
                <p>{p.name}</p>
              </div>
              {p.categories.find(c => c.id === category.id) && (
                <div>
                  <CheckIcon size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
};

type Props = {
  category: {
    id: string;
    name: string;
  };
  products: ProductWithCategories[];
};
