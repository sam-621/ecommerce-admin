import { PlusCircleIcon } from 'lucide-react';

import { AdminPageLayout } from '@/components/layouts';
import { ButtonLink } from '@/components/theme';

export default function InventoryPage() {
  return (
    <AdminPageLayout
      title="Inventory"
      actions={
        <ButtonLink className="flex gap-2 flex-shrink-0" href="/inventory/create">
          <PlusCircleIcon size={16} /> Agregar producto
        </ButtonLink>
      }
    >
      <h1>Inventory</h1>
    </AdminPageLayout>
  );
}
