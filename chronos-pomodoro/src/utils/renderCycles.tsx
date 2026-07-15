import { Circle } from '../components/Circle';
import type { TaskStateModel } from '../models/TaskStateModel';

export function renderCycles(
  currentCycle: number,
  config: TaskStateModel['config'],
) {
  const cycles = [];

  for (let i = 1; i <= currentCycle; i++) {
    if (i === 8) {
      cycles.push(
        <Circle
          key={i}
          type={'Descanso longo'}
          duration={config.longBreakTime}
          color='bg-info'
        />,
      );
      return cycles;
    }

    if (i % 2 === 0) {
      cycles.push(
        <Circle
          key={i}
          type={'Descanso'}
          duration={config.shortBreakTime}
          color='bg-success'
        />,
      );
    }

    if (i % 2 !== 0) {
      cycles.push(<Circle key={i} type={'Foco'} duration={config.workTime} />);
    }
  }

  return cycles;
}
