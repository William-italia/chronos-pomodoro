import clsx from 'clsx';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

type MenuProps = {
  className?: string;
  children: React.ReactNode;
};

export function Menu({ children, className }: MenuProps) {
  return (
    <>
      <nav className={twMerge(clsx('flex items-center gap-4', className))}>
        {children}
      </nav>
    </>
  );
}
