'use client';

import { AlertTriangleIcon, CheckIcon } from 'lucide-react';
import { type FC, type ReactNode, useEffect } from 'react';
import { useFormState } from 'react-dom';

import { FormButton } from '@/components/forms';
import { Alert } from '@/components/theme';
import { notification } from '@/lib/notification';
import { type Product } from '@/lib/types';

import { updateProduct } from '../actions';
import { ProductDetails } from './product-details';

export const UpdateProductForm: FC<Props> = ({ product, headerMessage }) => {
  const updateProductWithId = updateProduct.bind(null, product);

  const [code, action] = useFormState(updateProductWithId, { error: false, message: '' });

  useEffect(() => {
    if (!code.error && code.message) {
      notification.success(code.message);
    }
  }, [code]);

  return (
    <form action={action} className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-foreground font-bold text-3xl">{product?.name}</h1>
        <div className="flex gap-4">
          <FormButton>Guardar producto</FormButton>
        </div>
      </div>
      {code.error && (
        <Alert
          title="Hay 1 error en este producto"
          content={code.message}
          icon={<AlertTriangleIcon className="h-4 w-4" />}
          variant={'destructive'}
        />
      )}

      {headerMessage && (
        <Alert
          title={headerMessage.title}
          content={headerMessage.content}
          icon={<CheckIcon className="h-4 w-4" />}
          variant={'success'}
        />
      )}
      <ProductDetails product={product} />
    </form>
  );
};

type Props = {
  headerMessage?: {
    title: string;
    content: ReactNode;
  };
  product: Product;
};
