'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { BoxesIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge, Checkbox, DataTableColumnHeader } from '@/components/theme';

import { type TableCategory } from './category-table';
import { CategoryTableActions } from './table-actions';

export const categoryTableColumns: ColumnDef<TableCategory>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={value => table.toggleAllPageRowsSelected(Boolean(value))}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(Boolean(value))}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Categoría" />;
    },
    cell: ({ row }) => (
      <Link href={`/admin/category/${row.original.slug ?? ''}`} className="flex items-center gap-2">
        {row.original.image ? (
          <Image
            src={row.original.image ?? ''}
            alt={row.getValue('name')}
            className="h-12 w-12 object-cover rounded-md"
            width={48}
            height={48}
          />
        ) : (
          <div className="flex justify-center items-center bg-neutral-100 rounded-md w-12 h-12 dark:bg-neutral-900">
            <BoxesIcon className="text-neutral-700 dark:text-neutral-500" />
          </div>
        )}
        <span>{row.original.name}</span>
      </Link>
    )
  },
  {
    accessorKey: 'items',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Productos" />;
    },
    cell: ({ row }) => {
      return <div className="font-medium">{row.original.items}</div>;
    }
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Estatus" />;
    },
    cell: ({ row }) => {
      return (
        <Badge variant={row.original.enabled ? 'default' : 'secondary'}>
          {row.original.enabled ? 'Habilitado' : 'Desabilitado'}
        </Badge>
      );
    }
  },
  {
    id: 'actions',
    header: () => <div></div>,
    cell: ({ row }) => <CategoryTableActions row={row} />
  }
];
