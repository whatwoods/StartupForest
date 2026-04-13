import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'medium', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-[color:var(--primary)] text-white hover:bg-opacity-90': variant === 'primary',
            'bg-[color:var(--secondary)] text-white hover:bg-opacity-90': variant === 'secondary',
            'hover:bg-[color:var(--surface-soft)] text-[color:var(--text)]': variant === 'ghost',
            'h-9 px-4 text-sm': size === 'small',
            'h-10 px-4 py-2 text-base': size === 'medium',
            'h-11 rounded-md px-8 text-lg': size === 'large',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
