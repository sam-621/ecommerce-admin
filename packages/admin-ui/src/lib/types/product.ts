export interface Product {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  slug: string;
  sku: string;
  description?: string;
  image?: string;
  price: number;
  comparisonPrice?: number;
  weight?: number;
  stock: number;
  enabled: boolean;
}

export type ProductWithCategories = Product & {
  categories: { id: string; name: string }[];
};
