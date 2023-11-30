export const Button = () => {
  return (
    <button
      type="button"
      className={twMerge(
        'w-full add-cart-button px-24 relative bg-neutral-title h-48 rounded-lg flex justify-center items-center gap-12 text-neutral-white font-medium text-sm',
        className,
        rest.disabled && 'bg-neutral-border disabled text-neutral-text'
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
