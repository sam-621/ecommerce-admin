import type { Row } from '@tanstack/react-table';
import { MoreHorizontalIcon } from 'lucide-react';
import type { FC } from 'react';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/theme';
import { notification } from '@/lib/notification';

import { deleteProduct } from '../actions';
import { type TableProduct } from './inventory-table';

export const InventoryTableActions: FC<Props> = ({ row }) => {
  const product: TableProduct = row.original;
  const productState = product.enabled ? 'enabled' : 'disabled';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <MoreHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>Editar</DropdownMenuItem>
        <DropdownMenuItem>Copiar SKU</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Estado</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={productState}>
              <DropdownMenuRadioItem value={'enabled'}>Habilitado</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={'disabled'}>Desabilitado</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            const id = notification.loading(`Eliminando producto ${product.name}`);
            await deleteProduct(product.id);
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
