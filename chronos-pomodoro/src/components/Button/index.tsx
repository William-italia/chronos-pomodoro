import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <>
      <button
        className={twMerge(
          clsx(
            'flex items-center justify-center cursor-pointer text-text-over-primary bg-link-color hover:bg-link-hover duration-200 rounded-lg p-3',
          ),
        )}
      >
        {children}
      </button>
    </>
  );
}
