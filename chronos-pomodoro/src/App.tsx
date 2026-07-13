import {
  CirclePlayIcon,
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react';
import { Header } from './components/Header';
import { Heading } from './components/Heading';
import { ButtonMenu } from './components/ButtonMenu';
import { Menu } from './components/Menu';
import { Timer } from './components/Timer';
import { Container } from './components/Container';
import { Form } from './components/Form';
import { Input } from './components/Input';
import { CyclesContent } from './components/CyclesContent';
import { Circle } from './components/Circle';
import { CycleInfo } from './components/CycleInfo';
import { Button } from './components/Button/index';
import { Footer } from './components/Footer';

export function App() {
  return (
    <Container>
      <Header>
        <Heading>
          <TimerIcon size={64} />
          <span className='text-4xl font-bold'>Chronos</span>
        </Heading>

        <Menu>
          <ButtonMenu title='teste' href='/'>
            <HouseIcon />
          </ButtonMenu>
          <ButtonMenu title='teste' href='/history/'>
            <HistoryIcon />
          </ButtonMenu>
          <ButtonMenu title='teste' href='/settings/'>
            <SettingsIcon />
          </ButtonMenu>
          <ButtonMenu as='button' title='teste' href=''>
            <SunIcon />
          </ButtonMenu>
        </Menu>
      </Header>

      <Timer>00:00</Timer>

      <Form>
        <Input id={'taskName'} title={'Task'} type={'text'} />

        <CycleInfo action='foque' duration={25} />

        <CyclesContent>
          <Circle type={'Foco'} duration={25} />
          <Circle type={'Descanso'} duration={5} color='bg-success' />
          <Circle type={'Interrompido'} duration={25} color='bg-error' />
          <Circle type={'Interrompido'} duration={25} color='bg-info' />
        </CyclesContent>

        <Button>
          <CirclePlayIcon size={32} />
        </Button>
      </Form>

      <Footer />
    </Container>
  );
}
