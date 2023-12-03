import Image from 'next/image';
import { type FC } from 'react';

import { Chip } from '@/components/theme';
import { type Product } from '@/lib/types';
import { DEFAULT_PRODUCT_IMAGE, getFormattedPrice } from '@/lib/utils';

import { ProductDetailsActions } from './product-details-actions';

export const ProductDetails: FC<Props> = ({ product }) => {
  const isInStock = product.stock > 0;
  const hasDiscount = Boolean(product.comparisonPrice && product.comparisonPrice > 0);

  return (
    <div>
      <div className="lg:border lg:p-6 border-neutral-border rounded-2xl lg:bg-neutral-white">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-col gap-16">
            <div className="border border-neutral-border rounded-lg bg-neutral-white p-[10px]">
              <Image
                // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                src={product.image || DEFAULT_PRODUCT_IMAGE}
                width={405}
                height={405}
                alt={product.name}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-grow">
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
              <h1 className="mb-4 text-neutral-title text-32 font-bold">{product.name}</h1>
            </div>
            {hasDiscount && (
              <div className="flex items-start gap-8">
                <h2 className="text-neutral-lighter font-medium text-xl">
                  <s>{getFormattedPrice(product.comparisonPrice ?? 0)}</s>
                </h2>
                <Chip className="bg-error-500 text-neutral-white text-[10px] py-1 px-2">
                  En oferta
                </Chip>
              </div>
            )}
            <h4 className="mb-12 text-40 font-bold">{getFormattedPrice(product.price ?? 0)}</h4>
            <ProductDetailsActions product={product} />
          </div>
        </div>
        {Boolean(product.description) && (
          <>
            <div className="mt-40">
              <hr className="border border-t-[1px] border-neutral-alt" />
            </div>
            <div className="flex flex-col gap-16 mt-40">
              <h2 className="text-4xl font-bold text-neutral-title">Descripción</h2>
              <p className="text-neutral-light leading-[1.8] font-normal">{product.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

type Props = {
  product: Product;
};
