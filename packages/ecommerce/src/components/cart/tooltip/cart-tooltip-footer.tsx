import { FilledLinkButton } from '@/components/theme';
import { useOrderContext } from '@/lib/contexts';
import { getFormattedPrice } from '@/lib/utils';

export const CartTooltipFooter = () => {
  const { order } = useOrderContext();
  const lines = order?.lines;

  return (
    <footer className="border-t flex-none border-t-neutral-border flex flex-col">
      <div className="flex flex-col gap-2 px-6 pt-6">
        <div className="flex justify-between items-center">
          <strong className="text-neutral-title text-lg">Envío</strong>
          <span className="text-neutral-light">Se calculará en el pago</span>
        </div>
        <div className="flex justify-between items-center">
          <strong className="text-neutral-title text-2xl">Subtotal</strong>
          <span className="text-neutral-title text-[40px] font-bold">
            {getFormattedPrice(order?.total ?? 0)}
          </span>
        </div>
      </div>
      <div className="p-24 flex-none">
        <FilledLinkButton
          href="/checkout"
          className={`h-64 w-full font-medium text-neutral-white ${
            !lines?.length &&
            'cursor-not-allowed pointer-events-none bg-neutral-border text-neutral-white'
          }`}
        >
          Continúa y paga
        </FilledLinkButton>
      </div>
    </footer>
  );
};
