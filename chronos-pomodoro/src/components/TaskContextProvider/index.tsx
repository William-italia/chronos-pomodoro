import { useState } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { initialState } from '../../states/ initialTaskState';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvier({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
