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

import { removeCategory } from '../actions';
import { type TableCategory } from './category-table';

export const CategoryTableActions: FC<Props> = ({ row }) => {
  const category: TableCategory = row.original;

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
            const id = notification.loading(`Eliminando categoría ${category.name}`);
            await removeCategory(category.id);
            notification.success(`Categoría ${category.name} eliminada`, { id });
          }}
        >
          <span className="text-destructive font-medium">Eliminar</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type Props = {
  row: Row<any>;
};
