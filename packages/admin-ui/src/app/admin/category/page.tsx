import { PlusCircleIcon } from 'lucide-react';

import { AdminPageLayout } from '@/components/layouts';
import { ButtonLink } from '@/components/theme';

import { CategoryTable } from './components';

export default function CategoryPage() {
  return (
    <AdminPageLayout
      title="Category"
      breadcrumbs
      actions={
        <ButtonLink className="flex gap-2 flex-shrink-0" href="/admin/category/create">
          <PlusCircleIcon size={16} /> Agregar Categoría
        </ButtonLink>
      }
    >
      <CategoryTable />
    </AdminPageLayout>
  );
}
