// import styles from './styles.module.css';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type HeaderProps = {
  className?: string;
  children: React.ReactNode;
};

export function Header({ children, className }: HeaderProps) {
  return (
    <div>
      <header
        className={twMerge(
          clsx(
            'flex flex-col gap-8 items-center justify-center my-16',
            className,
          ),
        )}
      >
        {children}
      </header>
    </div>
  );
}
