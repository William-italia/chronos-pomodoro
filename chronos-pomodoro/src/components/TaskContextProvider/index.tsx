import { useEffect, useReducer } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { initialState } from '../../contexts/TaskContext/initialStateTask';
import { taskReducer } from '../../contexts/TaskContext/taskReducer';
import { TimerWorkerManager } from '../../workers/timerWorkerManager';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvier({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const countDownSeconds = e.data;
    console.log(countDownSeconds);

    if (countDownSeconds <= 0) {
      console.log('Worker COMPLETED');
      worker.terminate();
    }
  });

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      const countDownSeconds = e.data;
      console.log(countDownSeconds);

      if (countDownSeconds <= 0) {
        console.log('Worker COMPLETED');
        worker.terminate();
      }
    };

    worker.onmessage(handleMessage);

    return () => {};
  }, [worker]);

  useEffect(() => {
    console.log(state);

    if (!state.activeTask) {
      worker.terminate();
      return;
    }

    console.log('estou passando');

    setTimeout(() => {
      worker.postMessage(state);
    }, 0);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
