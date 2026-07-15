import { createContext } from 'react';
import { initialState } from '../../states/ initialTaskState';
import type { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
