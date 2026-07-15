import { Timer } from '../../components/Timer';
import { MainTemplate } from '../../templates/MainTemplate';
import { MainForm } from '../../components/MainForm';

export function Home() {
  return (
    <MainTemplate>
      <Timer />

      <MainForm />
    </MainTemplate>
  );
}
