import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type TimerProps = {
  className?: string;
  children: React.ReactNode;
};

export function Timer({ children, className }: TimerProps) {
  return (
    <div
      tabIndex={0}
      className={twMerge(clsx('text-9xl font-bold', className))}
    >
      {children}
    </div>
  );
}
