'use client';

import { AlertTriangleIcon, CheckIcon } from 'lucide-react';
import { type FC, type ReactNode } from 'react';
import { useFormState } from 'react-dom';

import { FormButton } from '@/components/forms';
import { Alert } from '@/components/theme';
import { type Product } from '@/lib/types';
import { type ServerActionResult } from '@/lib/utils';

import { ProductDetails } from './product-details';

export const ProductForm: FC<Props> = ({ action: propAction, title, headerMessage, product }) => {
  const [code, action] = useFormState(propAction, { error: false, message: '' });

  return (
    <form action={action} className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-foreground font-bold text-3xl">{title}</h1>
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
  action: (
    prevState: ServerActionResult,
    formData: FormData
  ) => Promise<{
    error: boolean;
    message: string;
  }>;
  title: string;
  headerMessage?: {
    title: string;
    content: ReactNode;
  };
  product?: Product;
};
