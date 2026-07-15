import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DefaultInput } from '../DefaultInput';
import { CycleInfo } from '../CycleInfo';
import { CyclesContent } from '../CyclesContent';
import { DefaultButton } from '../DefaultButton';
import { CirclePlayIcon } from 'lucide-react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { useEffect, useRef } from 'react';
import { handleNextCurrentCycle } from '../../utils/handleNextCurrentCycle';
import { formatSeconds } from '../../utils/formatSeconds';
import { handleCycleGetDurationAndType } from '../../utils/handleCycleGetDurationAndType';
import { renderCycles } from '../../utils/renderCycles';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  const { currentCycle } = state;

  const {
    duration,
    action: type,
    label,
  } = handleCycleGetDurationAndType(currentCycle, state.config);

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (inputRef.current === null) return console.log('input not search');

    const taskName = inputRef.current.value.trim();
    if (taskName === '') return alert('Task name required!');

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName.trim(),
      startDate: Date.now(),
      completeDate: null, // timer
      interruptDate: null, // btn
      duration,
      type,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: handleNextCurrentCycle(prevState.currentCycle),
        secondsRemaining,
        formattedSecondsRemaining: formatSeconds(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  return (
    <form
      onSubmit={handleCreateNewTask}
      className={twMerge(clsx('flex flex-col my-16 items-center'))}
      action=''
    >
      <div className={twMerge(clsx('flex flex-col gap-8'))}>
        <DefaultInput
          id={'taskName'}
          labelText={'Task'}
          type={'text'}
          ref={inputRef}
        />

        <CycleInfo action={label} duration={duration} />
        <CyclesContent>
          {renderCycles(currentCycle, state.config)}
        </CyclesContent>

        <DefaultButton
          type='submit'
          icon={<CirclePlayIcon size={32} />}
          aria-label='play/pause'
          title='Play / Pause'
        />
      </div>
    </form>
  );
}
