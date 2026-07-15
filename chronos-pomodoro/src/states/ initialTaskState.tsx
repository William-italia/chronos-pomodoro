import type { TaskStateModel } from '../models/TaskStateModel';

export const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '21:00',
  activeTask: null,
  currentCycle: 5,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};
