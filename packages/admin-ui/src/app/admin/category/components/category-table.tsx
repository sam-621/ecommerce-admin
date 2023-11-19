import { DataTable } from '@/components/theme';
import { CategoryRepository } from '@/lib/repository';
import { type Category } from '@/lib/types';

import { categoryTableColumns } from './table-columns';

export const CategoryTable = async () => {
  const categories = await CategoryRepository.getMany();

  return (
    <DataTable
      data={categories}
      columns={categoryTableColumns}
      search={{
        placeholder: 'Buscar categories...',
        filterKey: 'name'
      }}
    />
  );
};

export type TableCategory = Pick<Category, 'id' | 'name' | 'slug' | 'enabled' | 'image'> & {
  items: number;
};
