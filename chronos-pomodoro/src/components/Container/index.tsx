import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={twMerge(clsx('flex flex-col items-center justify-center'))}>
      {children}
    </div>
  );
}
