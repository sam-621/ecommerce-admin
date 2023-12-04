import { type FC } from 'react';

import { Chip } from '@/components/theme';
import { type Product } from '@/lib/types';
import { getFormattedPrice } from '@/lib/utils';

export const StickyProductCart: FC<Props> = ({ product }) => {
  const isInStock = product.stock > 0;
  const hasDiscount = Boolean(product.comparisonPrice && product.comparisonPrice > 0);

  return (
    <div
      className="hidden lg:block bg-neutral-white border border-neutral-border h-fit p-6 rounded-2xl"
      style={{ position: 'sticky', top: 88, marginTop: -24 }}
    >
      <div className="flex gap-2">
        {isInStock && (
          <Chip className="bg-neutral-border text-neutral-text text-[10px] py-1 px-2">
            {product.stock} Disponibles
          </Chip>
        )}
      </div>
      <div className="flex items-center w-full gap-8">
        <hr className="opacity-50 bg-neutral-border w-[1px] h-[22px] border-none rounded-full" />
        <p className="text-neutral-light text-xs">SKU # {product.sku}</p>
      </div>
      <div>
        <h1 className="mb-8 text-neutral-title text-xl font-bold">{product.name}</h1>
      </div>
      {hasDiscount && (
        <div className="flex items-start gap-8">
          <h2 className="text-neutral-lighter font-medium text-base">
            <s>{getFormattedPrice(product.comparisonPrice ?? 0)}</s>
          </h2>
          <Chip className="bg-error-500 text-neutral-white text-[10px] h-20 flex items-center px-2">
            En oferta
          </Chip>
        </div>
      )}
      <h4 className="mb-12 text-32 font-bold">{getFormattedPrice(product.price ?? 0)}</h4>
      {/* <ProductDetailsActions product={product} /> */}
    </div>
  );
};

type Props = {
  product: Product;
};
