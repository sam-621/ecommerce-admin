import { createProduct } from '../actions';
import { ProductForm } from '../components';

export default function CreateProductPage() {
  return <ProductForm title="Crear producto" action={createProduct} />;
}
