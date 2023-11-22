import { type FC } from 'react';

import {
  Button,
  Card,
  CardContent,
  Dropzone,
  Input,
  Label,
  Select,
  SelectItem,
  Textarea
} from '@/components/theme';
import { type Category } from '@/lib/types';

export const CategoryDetails: FC<Props> = ({ category }) => {
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
                <Button variant={'secondary'} className="w-fit" type="button">
                  Agregar producto
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {category?.id && (
          <Card>
            <CardContent className="flex flex-col gap-4 p-4">
              <span className="text-xl">Zona de peligro</span>
              <Button
                // onClick={async () => {
                //   await removeProduct(product?.id ?? '');
                //   notification.success(`Producto ${product?.name} eliminado`);
                // }}
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
              name="state"
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
