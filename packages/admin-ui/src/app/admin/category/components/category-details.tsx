'use client';

import { useRouter } from 'next/navigation';
import { type FC } from 'react';

import {
  Button,
  Card,
  CardContent,
  Dialog,
  Dropzone,
  Input,
  Label,
  Select,
  SelectItem,
  Textarea
} from '@/components/theme';
import { notification } from '@/lib/notification';
import { type Category } from '@/lib/types';

import { removeCategory } from '../actions';

export const CategoryDetails: FC<Props> = ({ category }) => {
  const { push } = useRouter();

  return (
    <section className="grid grid-cols-[2fr,1fr] gap-6">
      <div className="flex flex-col gap-6">
        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <div className="flex gap-4">
              <Input
                name="name"
                label="Nombre"
                placeholder="Black T-shirt"
                defaultValue={category?.name}
              />
              {/* <Input
              name="slug"
              label="Slug"
              placeholder="black-t-shirt"
              defaultValue={product?.slug}
            /> */}
            </div>
            <Textarea name="description" label="Descripción" defaultValue={category?.description} />
            <Dropzone name="image" defaultValue={category?.image} />
          </CardContent>
        </Card>

        {category?.id && (
          <Card>
            <CardContent className="flex flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <Label>Productos</Label>
                <Dialog
                  trigger={{ text: 'Agregar producto', variant: 'secondary' }}
                  header={{
                    title: 'Agregar productos',
                    description: `Agrega productos a ${category.name}`
                  }}
                >
                  <Input placeholder="Encontrar productos" />
                </Dialog>
              </div>
            </CardContent>
          </Card>
        )}

        {category?.id && (
          <Card>
            <CardContent className="flex flex-col gap-4 p-4">
              <span className="text-xl">Zona de peligro</span>
              <Button
                onClick={async () => {
                  await removeCategory(category?.id ?? '');
                  push('/admin/category');
                  notification.success(`Categoría ${category?.name} eliminada`);
                }}
                variant="destructive"
                className="w-fit"
                type="button"
              >
                Eliminar producto
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
      <div className="flex flex-col gap-6">
        <Card>
          <CardContent className="p-4">
            <Select
              defaultValue={
                category?.enabled === undefined
                  ? 'enabled'
                  : category?.enabled
                  ? 'enabled'
                  : 'disabled'
              }
              name="enabled"
              placeholder="Estado"
              label="Estado"
            >
              <SelectItem value="enabled">Habilitado</SelectItem>
              <SelectItem value="disabled">Desabilitado</SelectItem>
            </Select>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

type Props = {
  category?: Category;
};
