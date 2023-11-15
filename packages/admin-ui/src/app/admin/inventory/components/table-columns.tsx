'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { Package } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge, Checkbox, DataTableColumnHeader } from '@/components/theme';

import { type TableProduct } from './inventory-table';
import { InventoryTableActions } from './table-actions';

export const inventoryTableColumns: ColumnDef<TableProduct>[] = [
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
    accessorKey: 'sku',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="SKU" />;
    },
    cell: ({ row }) => {
      return <span className="w-20">{row.original.sku}</span>;
    },
    enableSorting: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Producto" />;
    },
    cell: ({ row }) => (
      <Link href={`/inventory/${row.original.slug ?? ''}`} className="flex items-center gap-2">
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
            <Package className="text-neutral-700 dark:text-neutral-500" />
          </div>
        )}
        <span>{row.original.name}</span>
      </Link>
    )
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Precio" />;
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    }
  },
  {
    accessorKey: 'stock',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Stock" />;
    }
  },
  {
    accessorKey: 'Status',
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
    cell: ({ row }) => <InventoryTableActions row={row} />
  }
];
