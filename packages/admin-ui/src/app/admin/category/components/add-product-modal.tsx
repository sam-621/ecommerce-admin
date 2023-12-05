'use client';

import { BoxesIcon, CheckIcon, Loader2Icon } from 'lucide-react';
import Image from 'next/image';
import { type FC, useState } from 'react';

import { Button, Dialog } from '@/components/theme';
import { notification } from '@/lib/notification';
import { type ProductWithCategories } from '@/lib/types';

import { addProducts } from '../actions';

export const AddProductModal: FC<Props> = ({ products, category }) => {
  const [ids, setIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectProduct = (id: string) => {
    if (ids.includes(id)) {
      setIds(ids.filter(i => i !== id));
      return;
    }

    setIds([...ids, id]);
  };

  const handleSave = async () => {
    setIsLoading(true);
    await addProducts(category.id, ids);
    notification.success('Productos agregados');
    setIsLoading(false);
  };

  return (
    <Dialog
      trigger={{ text: 'Agregar producto', variant: 'secondary' }}
      header={{
        title: 'Agregar productos',
        description: `Agrega productos a ${category.name}`
      }}
      footer={{
        className: 'flex justify-end gap-4',
        children: (
          <Button aria-disabled={isLoading} disabled={isLoading} onClick={handleSave}>
            {isLoading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
            Guardar
          </Button>
        )
      }}
    >
      <div className="flex flex-col gap-4">
        {/* <Input placeholder="Encontrar productos" /> */}
        <div className="flex flex-col gap-4 h-80 overflow-y-scroll">
          {products
            .filter(p => !p.categories.some(c => c.id === category.id))
            .map(p => (
              <div
                key={p.id}
                className="flex justify-between items-center p-2 rounded-md hover:bg-accent"
                onClick={() => handleSelectProduct(p.id)}
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
                {ids.includes(p.id) && (
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
