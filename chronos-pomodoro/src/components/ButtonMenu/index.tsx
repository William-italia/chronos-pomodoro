import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type ButtonMenuProps = {
  as?: 'button' | 'a';
  href?: string;
  title: string;
  className?: string;
  children: React.ReactNode;
};

export function ButtonMenu({
  as = 'a',
  href,
  title,
  children,
  className,
}: ButtonMenuProps) {
  const Component = as;
  return (
    <Component
      href={href}
      className={twMerge(
        clsx(
          'bg-link-color hover:bg-link-hover text-text-over-primary p-3 rounded-lg cursor-pointer duration-300',
          className,
        ),
      )}
      aria-label={title}
      title={title}
    >
      {children}
    </Component>
  );
}
