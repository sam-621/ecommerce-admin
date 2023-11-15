import { type Product } from '@prisma/client';

import { DataTable } from '@/components/theme';
import { getProducts } from '@/lib/repository/products';

import { inventoryTableColumns } from './table-columns';

export const InventoryTable = async () => {
  const products = await getProducts();

  const tableProducts: TableProduct[] = products.map(p => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    price: p.price,
    sku: p.sku,
    image: p.image,
    stock: p.stock,
    enabled: p.enabled
  }));

  return (
    <DataTable
      data={tableProducts}
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
  'id' | 'name' | 'slug' | 'enabled' | 'image' | 'stock' | 'sku'
> & {
  price: number;
};
