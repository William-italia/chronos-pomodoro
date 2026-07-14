import { Timer } from '../../components/Timer';
import { MainTemplate } from '../../templates/MainTemplate';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { MainForm } from '../../components/MainForm';

export type HomeProps = {
  state: TaskStateModel;
  updateTimer: () => void;
  // setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  const { state, updateTimer } = props;

  return (
    <MainTemplate>
      <Timer>{state.formattedSecondsRemaining}</Timer>

      <MainForm state={state} updateTimer={updateTimer} />
    </MainTemplate>
  );
}
