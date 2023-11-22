'use client';

import { AlertTriangleIcon } from 'lucide-react';
import { useFormState } from 'react-dom';

import { FormButton } from '@/components/forms';
import { Alert } from '@/components/theme';

import { createCategory } from '../actions';
import { CategoryDetails } from './category-details';

export const CreateCategoryForm = () => {
  const [code, action] = useFormState(createCategory, { error: false, message: '' });

  return (
    <form action={action} className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-foreground font-bold text-3xl">Crear categoría</h1>
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

      <CategoryDetails />
    </form>
  );
};
