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

export const ProductDetails = () => {
  return (
    <section className="grid grid-cols-[2fr,1fr] gap-6">
      <div className="flex flex-col gap-6">
        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <div className="flex gap-4">
              <Input label="Nombre" placeholder="Black T-shirt" />
              <Input label="Slug" placeholder="black-t-shirt" />
            </div>
            <Textarea label="Descripción" />
            <Dropzone />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <Input type="number" label="SKU" placeholder="123" />
            <div className="flex gap-4">
              <Input type="number" label="Precio" placeholder="$ 0,00" />
              <Input type="number" label="Precio comparado" placeholder="$ 0,00" />
            </div>
            <Input type="number" label="Stock" placeholder="0" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <Checkbox label="Este producto requiere envío" />
            <div className="flex gap-4">
              <Input label="Peso" placeholder="0 kg" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <span className="text-xl">Zona de peligro</span>
            <Button variant="destructive" className="w-fit">
              Eliminar producto
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-6">
        <Card>
          <CardContent className="p-4">
            <Select
              placeholder="Estado"
              label="Estado"
              // defaultSelectedKeys={[productState]}
              // label="Estado"
              // options={[
              //   { label: 'Habilitado', value: 'enabled' },
              //   { label: 'Desabilitado', value: 'disabled' }
              // ]}
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
