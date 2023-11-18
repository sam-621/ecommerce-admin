'use client';

import { AlertTriangleIcon } from 'lucide-react';
import { useFormState } from 'react-dom';

import { FormButton } from '@/components/forms';
import { Alert } from '@/components/theme';

import { createProduct } from '../actions';
import { ProductDetails } from './product-details';

export const CreateProductForm = () => {
  const [code, action] = useFormState(createProduct, { error: false, message: '' });

  return (
    <form action={action} className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-foreground font-bold text-3xl">Crear producto</h1>
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

      <ProductDetails />
    </form>
  );
};
