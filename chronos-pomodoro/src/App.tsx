import { TaskContextProvier } from './components/TaskContextProvider';
import { Home } from './pages/home';

export function App() {
  return (
    <TaskContextProvier>
      <Home />;
    </TaskContextProvier>
  );
}
