import { twMerge } from 'tailwind-merge';
import styles from './styles.module.css';
import clsx from 'clsx';

type GenericHtmlProps = {
  children: React.ReactNode;
  className?: string;
};

export function GenericHtml({ children, className }: GenericHtmlProps) {
  return (
    <div
      className={twMerge(
        clsx(styles.genericHtml, 'p-2 max-w-[700px]', className),
      )}
    >
      {children}
    </div>
  );
}
