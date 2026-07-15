import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DefaultInput } from '../DefaultInput';
import { CycleInfo } from '../CycleInfo';
import { CyclesContent } from '../CyclesContent';
import { DefaultButton } from '../DefaultButton';
import { CirclePlayIcon } from 'lucide-react';
import { Circle } from '../Circle';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';

export function MainForm() {
  const { state, setState } = useContext(TaskContext);

  function updateTimer() {
    setState((prevState) => {
      return {
        ...prevState,
        formattedSecondsRemaining: '23:59',
      };
    });
  }

  function renderCircles() {
    const circles = [];

    for (let i = 1; i <= state.currentCycle; i++) {
      if (i === 8) {
        circles.push(
          <Circle
            key={i}
            type={'descanso longo'}
            duration={25}
            color='bg-info'
          />,
        );
        return circles;
      }

      if (i % 2 === 0) {
        circles.push(
          <Circle key={i} type={'Descanso'} duration={5} color='bg-success' />,
        );
      }

      if (i % 2 !== 0) {
        circles.push(<Circle key={i} type={'Foco'} duration={25} />);
      }
    }

    return circles.length !== 0 ? circles : '';
  }

  function renderInfo() {
    if (state.currentCycle === 7) {
      return {
        action: 'descanse',
        duration: state.config.longBreakTime,
      } as const;
    }

    if (state.currentCycle % 2 !== 0) {
      return {
        action: 'descanse' as const,
        duration: state.config.shortBreakTime,
      } as const;
    }

    return {
      action: 'foque' as const,
      duration: state.config.workTime,
    } as const;
  }

  const infos = renderInfo();

  return (
    <form
      className={twMerge(clsx('flex flex-col my-16 items-center'))}
      action=''
    >
      <div className={twMerge(clsx('flex flex-col gap-8'))}>
        <DefaultInput id={'taskName'} labelText={'Task'} type={'text'} />

        <CycleInfo action={infos.action} duration={infos.duration} />
        <CyclesContent>{renderCircles()}</CyclesContent>

        <DefaultButton
          icon={<CirclePlayIcon size={32} />}
          aria-label='play/pause'
          title='Play / Pause'
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            updateTimer();
          }}
        />
      </div>
    </form>
  );
}
