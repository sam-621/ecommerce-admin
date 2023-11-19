export interface Category {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  enabled: boolean;
}
