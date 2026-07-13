import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type FormProps = {
  children: React.ReactNode;
};

export function Form({ children }: FormProps) {
  return (
    <form
      className={twMerge(clsx('flex flex-col my-16 items-center'))}
      action=''
    >
      <div className={twMerge(clsx('flex flex-col gap-8'))}>{children}</div>
    </form>
  );
}
