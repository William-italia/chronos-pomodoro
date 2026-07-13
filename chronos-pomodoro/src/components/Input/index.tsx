import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  type: 'number' | 'text';
  placeHolder?: string;
};

export function Input({
  id,
  title,
  type = 'number',
  placeHolder,
  min = 1,
  max = 2,
  className,
  ...props
}: InputProps) {
  return (
    <div className={twMerge(clsx('flex flex-col items-center gap-2.5'))}>
      <label className='text-lg' htmlFor={id}>
        {title}:
      </label>
      <input
        className={twMerge(
          clsx(
            'border-b-2 border-primary text-center p-1 outline-0',
            className,
          ),
        )}
        id={id}
        type={type}
        name={id}
        placeholder={
          type === 'text' ? (placeHolder ?? 'Estudar Nest') : undefined
        }
        min={type === 'number' ? min : 1}
        max={type === 'number' ? max : 99}
        defaultValue={type === 'number' ? 1 : ''}
        {...props}
      />
    </div>
  );
}
