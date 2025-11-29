import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../Utils/getNextCycle';
import { getNextCycleType } from '../../Utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
	const { state } = useTaskContext();

	const cycleStep = Array.from({ length: state.currentCycle });

	const cycleDescriptionMap = {
		workTime: 'Foco',
		shortBreakTime: 'Descanso curso',
		longBreakTime: 'Descanso longo',
	};

	return (
		<>
			<div className={styles.cycles}>
				<span>Ciclos:</span>
				<div className={`${styles.cyclesDots}`}>
					{cycleStep.map((_, index) => {
						const nextCycle = getNextCycle(index);
						const nextCycleType = getNextCycleType(nextCycle);
						return (
							<span
								key={`${nextCycleType}_${nextCycle}`}
								className={`${styles.cycleDot} ${styles[nextCycleType]}`}
								aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
								title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
							></span>
						);
					})}

					{/* <span className={`${styles.cycleDot} ${styles.workTime}`}></span> */}
				</div>
			</div>
		</>
	);
}
