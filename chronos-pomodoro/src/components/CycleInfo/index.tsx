import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export type CycleInfoProps = {
  action: string;
  duration: number;
};

export function CycleInfo({ action, duration }: CycleInfoProps) {
  const { state } = useTaskContext();

  return (
    <div>
      <span>
        {state.activeTask ? (
          <>
            {state.activeTask.type === 'workTime' && (
              <strong>Fique em foco</strong>
            )}
            {state.activeTask.type === 'shortBreakTime' && (
              <strong>Descanse</strong>
            )}
            {state.activeTask.type === 'longBreakTime' && (
              <strong>Estique as pernas um pouco</strong>
            )}
          </>
        ) : (
          <>
            Nesse ciclo <strong>{action}</strong> por
            <strong> {duration} Min</strong>.
          </>
        )}
      </span>
    </div>
  );
}
