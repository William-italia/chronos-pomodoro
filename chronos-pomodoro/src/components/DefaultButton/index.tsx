import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'bg-primary' | 'bg-error';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'bg-primary',
  ...props
}: DefaultButtonProps) {
  return (
    <button
      className={twMerge(
        clsx(
          'flex self-center justify-center cursor-pointer text-text-over-primary hover:bg-link-hover duration-200 rounded-lg p-3 w-62.5',
          color === 'bg-primary'
            ? 'bg-link-color'
            : 'bg-error text-text-over-error hover:bg-error-hover',
        ),
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
