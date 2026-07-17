export function getTypeNextCycle(currentCycle: number): {
  type: 'longBreakTime' | 'shortBreakTime' | 'workTime';
  label: string;
} {
  if (currentCycle === 7) {
    return {
      type: 'longBreakTime',
      label: 'faça uma pausa longa',
    };
  }

  if (currentCycle % 2 !== 0) {
    return {
      type: 'shortBreakTime',
      label: 'descanse',
    };
  }

  return {
    type: 'workTime',
    label: 'foque',
  };
}
