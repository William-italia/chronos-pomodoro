import clsx from 'clsx';
import { TimerIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export function Logo() {
  return (
    <a
      href=''
      className={twMerge(
        clsx(
          'flex flex-col items-center justify-center gap-1.5 text-link-color hover:text-link-hover transition-colors duration-300',
        ),
      )}
    >
      <TimerIcon size={64} />
      <span className='text-4xl font-bold'>Chronos</span>
    </a>
  );
}
