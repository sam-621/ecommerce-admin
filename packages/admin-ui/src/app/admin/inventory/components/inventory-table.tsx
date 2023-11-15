import { type Product } from '@prisma/client';

import { DataTable } from '@/components/theme';

import { getProducts } from '../inventory-data';
import { inventoryTableColumns } from './table-columns';

export const InventoryTable = async () => {
  const products = await getProducts();

  return (
    <DataTable
      data={products}
      columns={inventoryTableColumns}
      search={{
        placeholder: 'Buscar productos...',
        filterKey: 'name'
      }}
    />
  );
};

export type TableProduct = Pick<
  Product,
  'id' | 'name' | 'slug' | 'enabled' | 'image' | 'price' | 'stock' | 'sku'
>;
