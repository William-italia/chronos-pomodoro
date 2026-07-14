import { useState } from 'react';
import { Home } from './pages/home';
import type { TaskStateModel } from './models/TaskStateModel';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  // queria por a função teste aqui
  function updateTimer() {
    setState((prevState) => ({
      ...prevState,
      formattedSecondsRemaining: '23:59',
      currentCycle: 7,
    }));
  }

  return <Home state={state} updateTimer={updateTimer} />;
}
