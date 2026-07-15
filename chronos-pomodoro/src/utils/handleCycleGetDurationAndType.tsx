import type { TaskStateModel } from '../models/TaskStateModel';

export function handleCycleGetDurationAndType(
  currentCycle: number,
  config: TaskStateModel['config'],
): {
  duration: number;
  action: 'longBreakTime' | 'shortBreakTime' | 'workTime';
  label: 'descanse' | 'foque';
} {
  if (currentCycle === 7) {
    return {
      duration: config.longBreakTime,
      action: 'longBreakTime',
      label: 'descanse',
    };
  }

  if (currentCycle % 2 === 0) {
    return {
      duration: config.workTime,
      action: 'workTime',
      label: 'foque',
    };
  }

  return {
    duration: config.shortBreakTime,
    action: 'shortBreakTime',
    label: 'descanse',
  };
}
