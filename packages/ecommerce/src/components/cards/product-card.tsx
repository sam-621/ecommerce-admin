import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';

import { type Product } from '@/lib/types';

const DEFAULT_PRODUCT_IMAGE = '/images/default-product-image.png';

export const ProductCard: FC<Props> = ({ product, isHorizontal }) => {
  const hasDiscount = Boolean(product.comparisonPrice);
  return (
    <Link href={`/producto/${product.slug}`}>
      <a className="card-product flex-card flex rounded-xl border border-neutral-border h-full bg-neutral-white">
        <article className={`flex w-full ${isHorizontal ? 'flex-col md:flex-row' : 'flex-col'}`}>
          <div
            className={`flex justify-center relative ${
              isHorizontal
                ? 'px-6 border-r  border-neutral-border'
                : 'border-b border-neutral-border'
            }`}
          >
            <Image
              height="300"
              width="400"
              alt={product.name}
              src={product.image ?? ''}
              className="image-product object-cover hover:scale-105 transition-all"
            />
          </div>
          <div className="p-16 flex flex-col justify-between h-full w-full">
            <div className="flex flex-col flex-grow">
              <div className="flex items-center w-full gap-8 mb-4">
                <p className="text-neutral-light text-xs">SKU # {product.sku}</p>
              </div>
              <div className="flex-grow">
                <h3 className="mb-8 text-neutral-title text-20 font-semibold">{product.name}</h3>
              </div>
              {hasDiscount && (
                <div className="flex gap-8 items-center mb-8">
                  <h5 className="text-neutral-lighter font-medium text-base">
                    <s>${formatPrice(product.customFields.discount ?? 0)}</s>
                  </h5>
                  {hasDiscount && (
                    <p className="w-fit h-20 items-center inline-flex uppercase tracking-wider text-10 bg-error-500 px-8 py-[2px] rounded-full text-neutral-white font-extrabold">
                      En oferta
                    </p>
                  )}
                </div>
              )}
              <div className="flex items-center gap-16">
                <h4 className="mb-12 text-32 font-bold">${formatPrice(priceToShow)}</h4>
              </div>
            </div>
            <div>
              <FilledButton disabled={!isInStock || isLoading} onClick={addToOrder}>
                <span className=" transition-all duration-500">{textButton}</span>
                <ShoppingCartIcon className="h-24 w-24 icon-cart ease-in-out duration-500 delay-50" />
              </FilledButton>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};

type Props = {
  product: Product;
  isHorizontal?: boolean;
};