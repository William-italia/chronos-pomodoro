import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

{
  /* InputHTMLAttributes<HTMLInputElement> & */
}
type DefaultInputProps = {
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  labelText,
  type = 'number',
  placeholder,
  min = 1,
  max = 2,
  className,
  ...props
}: DefaultInputProps) {
  return (
    <div className={twMerge(clsx('flex flex-col items-center gap-2.5'))}>
      <label className='text-lg' htmlFor={id}>
        {labelText}:
      </label>
      <input
        className={twMerge(
          clsx(
            'border-b-2 border-primary text-center p-1 outline-none focus:outline-none disabled:border-disabled disabled:text-text-muted',
            className,
          ),
        )}
        id={id}
        type={type}
        name={id}
        placeholder={
          type === 'text'
            ? (placeholder ?? 'ex.: estudar para entrevista')
            : undefined
        }
        min={type === 'number' ? min : 1}
        max={type === 'number' ? max : 99}
        defaultValue={type === 'number' ? 1 : ''}
        {...props}
      />
    </div>
  );
}
