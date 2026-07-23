import type { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSeconds';
import { handleNextCurrentCycle } from '../../utils/handleNextCurrentCycle';
import { TaskActionTypes, type TaskActionModel } from './taskActions';
import type { TaskModel } from '../../models/TaskModel';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const secondsRemaining = action.payload.duration * 60;
      const nextCycle = handleNextCurrentCycle(state.currentCycle);

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }

    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map((task: TaskModel) =>
          task.id === action.payload.id
            ? { ...task, completeDate: Date.now() }
            : task,
        ),
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map((task: TaskModel) =>
          task.id === action.payload.id
            ? { ...task, interruptDate: Date.now() }
            : task,
        ),
      };
    }
  }
}
