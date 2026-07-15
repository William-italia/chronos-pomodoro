import { useEffect, useState } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { initialState } from '../../contexts/TaskContext/ initialTaskState';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvier({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
