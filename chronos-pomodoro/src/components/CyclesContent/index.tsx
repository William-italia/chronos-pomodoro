import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type CiclesContentProps = {
  children: React.ReactNode;
};

export function CyclesContent({ children }: CiclesContentProps) {
  return (
    <div
      className={twMerge(clsx('flex flex-col gap-2 items-center text-center'))}
    >
      <span>Ciclos:</span>
      <div className={twMerge(clsx('flex gap-2'))}>{children}</div>
    </div>
  );
}
