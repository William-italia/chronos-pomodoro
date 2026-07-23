import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  COMPLETE_TASK = 'COMPLETE_TASK',
}

export type TaskActionModel = {
  type:
    | TaskActionTypes.START_TASK
    | TaskActionTypes.INTERRUPT_TASK
    | TaskActionTypes.COMPLETE_TASK;
  payload: TaskModel;
};
