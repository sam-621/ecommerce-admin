import { type FC } from 'react';

import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Dropzone,
  Input,
  Select,
  SelectItem,
  Textarea
} from '@/components/theme';
import { notification } from '@/lib/notification';
import { type Product } from '@/lib/types';

import { removeProduct } from '../actions';

export const ProductDetails: FC<Props> = ({ product }) => {
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
                defaultValue={product?.name}
              />
              {/* <Input
                name="slug"
                label="Slug"
                placeholder="black-t-shirt"
                defaultValue={product?.slug}
              /> */}
            </div>
            <Textarea name="description" label="Descripción" defaultValue={product?.description} />
            <Dropzone name="image" defaultValue={product?.image} />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <Input
              name="sku"
              type="text"
              label="SKU"
              placeholder="123"
              defaultValue={product?.sku}
            />
            <div className="flex gap-4">
              <Input
                name="price"
                type="number"
                label="Precio"
                placeholder="$ 0,00"
                defaultValue={product?.price}
              />
              <Input
                name="comparisonPrice"
                type="number"
                label="Precio comparado"
                placeholder="$ 0,00"
                defaultValue={product?.comparisonPrice}
              />
            </div>
            <Input
              name="stock"
              type="number"
              label="Stock"
              placeholder="0"
              defaultValue={product?.stock}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <Checkbox label="Este producto requiere envío" checked={Boolean(product?.weight)} />
            <div className="flex gap-4">
              <Input name="weight" label="Peso" placeholder="0 kg" defaultValue={product?.weight} />
            </div>
          </CardContent>
        </Card>

        {product?.id && (
          <Card>
            <CardContent className="flex flex-col gap-4 p-4">
              <span className="text-xl">Zona de peligro</span>
              <Button
                onClick={async () => {
                  await removeProduct(product?.id ?? '');
                  notification.success(`Producto ${product?.name} eliminado`);
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
                product?.enabled === undefined
                  ? 'enabled'
                  : product?.enabled
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

        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            {/* <Select label="Colecciones" placeholder="Selecciona colleciones" /> */}
            <ul className="flex flex-col gap-4">
              <li className="text-sm font-normal">• Clothes</li>
              <li className="text-sm font-normal">• Electronics</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

type Props = {
  product?: Product;
};
