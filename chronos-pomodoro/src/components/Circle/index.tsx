import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type CircleProps = {
  duration: number;
  type: string;
  color?: 'bg-warning' | 'bg-success' | 'bg-error' | 'bg-info';
};

export function Circle({ duration, type, color = 'bg-warning' }: CircleProps) {
  return (
    <>
      <span
        title={`${type}: ${duration} min`}
        className={twMerge(
          clsx('h-5 w-5 hover:scale-150 duration-200 rounded-full', color),
        )}
      ></span>
    </>
  );
}
