import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../utils';

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'text-destructive border-destructive dark:border-destructive [&>svg]:text-destructive',
        success: 'text-green-600 border-green-600 dark:border-green-600 [&>svg]:text-green-600'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

const AlertRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
AlertRoot.displayName = 'AlertRoot';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
));
AlertDescription.displayName = 'AlertDescription';

export const Alert = React.forwardRef<
  HTMLParagraphElement,
  Props & VariantProps<typeof alertVariants>
>(({ title, content, icon, className, variant, ...props }, ref) => (
  <AlertRoot variant={variant} {...props}>
    {icon}
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription>{content}</AlertDescription>
  </AlertRoot>
));
Alert.displayName = 'Alert';

type Props = {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactElement;
  className?: string;
};
