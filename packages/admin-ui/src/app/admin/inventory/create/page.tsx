'use client';

import { AlertTriangleIcon, CheckIcon } from 'lucide-react';
import Link from 'next/link';
import { useFormState } from 'react-dom';

import { Alert, Button } from '@/components/theme';

import { createProduct } from '../actions';
import { ProductDetails } from '../components';

export default function CreateProductPage() {
  const [code, action] = useFormState(createProduct, { error: false, message: '' });

  return (
    <form action={action} className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-foreground font-bold text-3xl">Crear producto</h1>
        <div className="flex gap-4">
          <Button color="primary" type="submit">
            Guardar producto
          </Button>
        </div>
      </div>
      {code.message && (
        <div>
          {code.error ? (
            <Alert
              title="Hay 1 error en este producto"
              content={code.message}
              icon={<AlertTriangleIcon className="h-4 w-4" />}
              variant={'destructive'}
            />
          ) : (
            <Alert
              title={code.message}
              content={
                <div>
                  Puedes{' '}
                  <Link href={'/admin/inventory/create'} className="underline">
                    agregar otro producto{' '}
                  </Link>
                  o{' '}
                  <Link href={'/admin/inventory'} className="underline">
                    ver todos tus productos
                  </Link>
                </div>
              }
              icon={<CheckIcon className="h-4 w-4" />}
              variant={'success'}
            />
          )}
        </div>
      )}
      <ProductDetails />
    </form>
  );
}
