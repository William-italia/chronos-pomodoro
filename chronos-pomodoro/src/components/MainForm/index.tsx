import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DefaultInput } from '../DefaultInput';
import { CycleInfo } from '../CycleInfo';
import { CyclesContent } from '../CyclesContent';
import { DefaultButton } from '../DefaultButton';
import { CirclePlayIcon, CircleStopIcon } from 'lucide-react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { useEffect, useRef } from 'react';
import { handleNextCurrentCycle } from '../../utils/handleNextCurrentCycle';
import { formatSecondsToMinutes } from '../../utils/formatSeconds';
import { getTypeNextCycle } from '../../utils/getTypeNextCycle';
import { renderCycles } from '../../utils/renderCycles';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  const { currentCycle } = state;
  const { type, label } = getTypeNextCycle(currentCycle);

  function handlePlayAndPause(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    if (!state.activeTask) return;

    event.preventDefault();

    const confirmed = window.confirm(
      'Tem certeza que deseja interromper esta tarefa?',
    );

    if (confirmed) {
      setState((prevState) => {
        return {
          ...prevState,
          activeTask: null,
          secondsRemaining: 0,
          formattedSecondsRemaining: '00:00',
          tasks: prevState.tasks.map((task: TaskModel) =>
            task.id === prevState.activeTask!.id
              ? { ...task, interruptDate: Date.now() }
              : task,
          ),
        };
      });
    }
  }

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
      duration: state.config[type],
      type,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: handleNextCurrentCycle(prevState.currentCycle),
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <form
      onSubmit={handleCreateNewTask}
      className={twMerge(clsx('flex flex-col my-16 items-center '))}
      action=''
    >
      <div className={twMerge(clsx('flex flex-col items-center gap-8 '))}>
        <DefaultInput
          id={'taskName'}
          labelText={'Task'}
          type={'text'}
          ref={inputRef}
          disabled={!!state.activeTask}
        />

        <CycleInfo action={label} duration={state.config[type]} />

        {state.currentCycle > 0 && (
          <CyclesContent>
            {renderCycles(currentCycle, state.config)}
          </CyclesContent>
        )}

        <DefaultButton
          type='submit'
          color={state.activeTask ? 'bg-error' : 'bg-primary'}
          icon={
            state.activeTask ? (
              <>
                <CircleStopIcon size={32} />
                <span className='ml-2'>Pausar</span>
              </>
            ) : (
              <>
                <CirclePlayIcon size={32} />
                <span className='ml-2'>Iniciar</span>
              </>
            )
          }
          aria-label={state.activeTask ? 'Parar timer' : 'Iniciar timer'}
          title={state.activeTask ? 'Parar timer' : 'Iniciar timer'}
          onClick={handlePlayAndPause}
        />
      </div>
    </form>
  );
}
