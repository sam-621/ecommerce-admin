import { createProduct } from '../actions';
import { ProductForm } from '../components';

export default function CreateProductPage() {
  return <ProductForm action={createProduct} />;
}
