'use client';

import { AlertTriangleIcon, CheckIcon } from 'lucide-react';
import { type FC, type ReactNode, useEffect } from 'react';
import { useFormState } from 'react-dom';

import { FormButton } from '@/components/forms';
import { Alert } from '@/components/theme';
import { notification } from '@/lib/notification';
import { type Category, type ProductWithCategories } from '@/lib/types';

import { updateCategory } from '../actions';
import { CategoryDetails } from './category-details';

export const UpdateCategoryForm: FC<Props> = ({ category, products, headerMessage }) => {
  const updateProductWithId = updateCategory.bind(null, category);

  const [code, action] = useFormState(updateProductWithId, { error: false, message: '' });

  useEffect(() => {
    if (!code.error && code.message) {
      notification.success(code.message);
    }
  }, [code]);

  return (
    <form action={action} className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-foreground font-bold text-3xl">{category?.name}</h1>
        <div className="flex gap-4">
          <FormButton>Guardar categoría</FormButton>
        </div>
      </div>
      {code.error && (
        <Alert
          title="Hay 1 error en esta categoría"
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
      <CategoryDetails category={category} products={products} />
    </form>
  );
};

type Props = {
  headerMessage?: {
    title: string;
    content: ReactNode;
  };
  category: Category;
  products?: ProductWithCategories[];
};
