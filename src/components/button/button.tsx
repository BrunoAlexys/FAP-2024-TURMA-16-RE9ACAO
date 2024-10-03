import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    variant: 'solid' | 'transparent';
    children: ReactNode;
    type?: 'submit' | 'button';
    size?: 'small' | 'medium' | 'large'; // nova prop de tamanho
};

export const Button = ({ children, variant, type, size = 'medium' }: ButtonProps) => {
    const baseStyles = 'rounded-xl font-semibold';
    const solidStyles = 'bg-blue-600 text-white hover:bg-blue-700';
    const outlineStyles = 'bg-transparent text-blue-600';

    const sizeStyles = {
        small: 'h-6 w-20 text-sm',
        medium: 'h-8 w-28 text-base',
        large: 'h-9 w-32 text-lg',
    };

    return (
        <button
            className={twMerge(
                baseStyles,
                sizeStyles[size], // Aplica o estilo com base no tamanho
                variant === 'solid' ? solidStyles : outlineStyles
            )}
            type={type}
        >
            {children}
        </button>
    );
};

