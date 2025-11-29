import { FormRow } from '../FormRow';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/taskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../Utils/getNextCycle';
import { getNextCycleType } from '../../Utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../Utils/formatSecondsToMinutes';

export function MainForm() {
	// const [taskName, setTaskName] = useState('');
	const { state, setState } = useTaskContext();

	const taskNameInput = useRef<HTMLInputElement>(null);
	//ciclos
	const nextCycle = getNextCycle(state.currentCycle);
	const nextCycleType = getNextCycleType(nextCycle);
	console.log(nextCycle, nextCycleType);

	function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (taskNameInput.current === null) return;
		const taskName = taskNameInput.current?.value.trim();

		if (!taskName) {
			alert('Digite o nome da tarefa!');
			return;
		}

		const newTask: TaskModel = {
			id: Date.now().toString(),
			name: taskName.toString(),
			startDate: Date.now(),
			completeDate: null,
			interruptDate: null,
			duration: state.config[nextCycleType],
			type: nextCycleType,
		};

		const secondsRemaining = newTask.duration * 60;

		setState(prevState => {
			return {
				...prevState,
				config: { ...prevState.config },
				activeTask: newTask,
				currentCycle: nextCycle,
				secondsRemaining, // conferir
				formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), // conferir
				tasks: [...prevState.tasks, newTask],
			};
		});
	}

	function handleInterruptTask() {
		setState(prevState => {
			return {
				...prevState,
				activeTask: null,
				secondsRemaining: 0,
				formattedSecondsRemaining: '00:00',
				tasks: prevState.tasks.map(task => {
					if (prevState.activeTask && prevState.activeTask?.id === task.id) {
						return { ...task, interruptDate: Date.now() };
					}
					return task;
				}),
			};
		});
	}

	return (
		<form onSubmit={handleCreateNewTask} className='form' action=''>
			<FormRow>
				<DefaultInput
					labelText='task:'
					id='meuInput'
					type='text'
					placeholder='Estudar React'
					// value={taskName}
					// onChange={e => setTaskName(e.target.value)}
					ref={taskNameInput}
					disabled={!!state.activeTask}
				/>
			</FormRow>

			<FormRow>
				<p>Este ciclo é de 25Min.</p>
			</FormRow>

			{state.currentCycle > 0 && (
				<FormRow>
					<Cycles />
				</FormRow>
			)}

			<FormRow>
				{!state.activeTask && (
					<DefaultButton
						color='green'
						icon={<PlayCircleIcon />}
						type='submit'
						aria-label='Inciar Nova Tarefa'
						title='Inciar Nova Tarefa'
					/>
				)}

				{!!state.activeTask && (
					<DefaultButton
						color='red'
						icon={<StopCircleIcon />}
						type='button'
						aria-label='Parar Tarefa'
						title='Parar Tarefa'
						onClick={handleInterruptTask}
					/>
				)}
			</FormRow>
		</form>
	);
}
