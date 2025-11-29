import { Home } from './pages/home';
// import { NotFound } from './pages/NotFound';
// import { AboutPomodoro } from './pages/AboutPomodoro';

import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

export function App() {
	return (
		<TaskContextProvider>
			<Home />
		</TaskContextProvider>
	);
}
