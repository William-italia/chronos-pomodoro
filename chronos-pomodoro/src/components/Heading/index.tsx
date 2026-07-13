import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type HeadingProps = {
  className?: string;
  children: React.ReactNode;
};

export function Heading({ children, className }: HeadingProps) {
  return (
    <a
      href=''
      className={twMerge(
        clsx(
          'flex flex-col items-center justify-center gap-1.5 text-link-color hover:text-link-hover transition-colors duration-300',
          className,
        ),
      )}
    >
      {children}
    </a>
  );
}
