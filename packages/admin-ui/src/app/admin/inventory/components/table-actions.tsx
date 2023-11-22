import type { Row } from '@tanstack/react-table';
import { MoreHorizontalIcon } from 'lucide-react';
import type { FC } from 'react';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/theme';
import { notification } from '@/lib/notification';

import { removeProduct } from '../actions';
import { type TableProduct } from './inventory-table';

export const InventoryTableActions: FC<Props> = ({ row }) => {
  const product: TableProduct = row.original;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <MoreHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem
          onClick={async () => {
            const id = notification.loading(`Eliminando producto ${product.name}`);
            await removeProduct(product.id);
            notification.success(`Producto ${product.name} eliminado`, { id });
          }}
        >
          <span className="text-destructive font-medium">Eliminar</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type Props = {
  row: Row<TableProduct>;
};
