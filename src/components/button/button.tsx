import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    variant: 'solid' | 'transparent';
    children: ReactNode
}

export const Button = ({ children, variant }: ButtonProps) => {
    const baseStyles = 'px-4 py-2 rounded-xl font-semibold';
    const solidStyles = 'bg-blue-600 text-white hover:bg-blue-700';
    const outlineStyles = 'bg-transparent text-blue-600';

    return (
        <button className={twMerge(
            baseStyles,
            variant === 'solid' ? solidStyles : outlineStyles
        )}>
            {children}
        </button>
    );
};
