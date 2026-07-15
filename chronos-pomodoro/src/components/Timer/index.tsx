import clsx from 'clsx';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { TaskContext } from '../../contexts/TaskContext';

type TimerProps = {
  className?: string;
};

export function Timer({ className }: TimerProps) {
  const { state } = useContext(TaskContext);
  return (
    <div
      tabIndex={0}
      className={twMerge(clsx('text-9xl font-bold', className))}
    >
      <p>{state.formattedSecondsRemaining}</p>
    </div>
  );
}
