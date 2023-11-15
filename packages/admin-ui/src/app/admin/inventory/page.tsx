import { PlusCircleIcon } from 'lucide-react';

import { AdminPageLayout } from '@/components/layouts';
import { ButtonLink } from '@/components/theme';

import { InventoryTable } from './components';

export default function InventoryPage() {
  return (
    <AdminPageLayout
      title="Inventory"
      breadcrumbs
      actions={
        <ButtonLink className="flex gap-2 flex-shrink-0" href="/inventory/create">
          <PlusCircleIcon size={16} /> Agregar producto
        </ButtonLink>
      }
    >
      <InventoryTable />
    </AdminPageLayout>
  );
}
