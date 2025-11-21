import { House, History, Sun, SettingsIcon, CirclePlay } from 'lucide-react';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { ButtonMenu } from './components/buttonMenu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

import './styles/theme.css';
import './styles/global.css';

export function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>

			<Container>
				<Menu>
					<ButtonMenu>
						<House />
					</ButtonMenu>

					<ButtonMenu>
						<History />
					</ButtonMenu>

					<ButtonMenu>
						<SettingsIcon />
					</ButtonMenu>

					<ButtonMenu>
						<Sun />
					</ButtonMenu>
				</Menu>
			</Container>

			<Container>
				<CountDown />
			</Container>

			<Container>
				<form className='form' action=''>
					<div className='formRow'>
						<DefaultInput label='Task' id='meuInput' type='text' />
					</div>

					<div className='formRow'>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>

					<div className='formRow'>
						<p>Ciclos</p>
						<span>0 0 0 0 0</span>
					</div>

					<div className='formRow'>
						<button className='bg-red-300 w-[240px] rounded-lg p-2 flex items-center justify-center'>
							<CirclePlay size={32} />
						</button>
					</div>
				</form>
			</Container>
		</>
	);
}
// export { App };
