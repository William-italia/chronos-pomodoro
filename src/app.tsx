import { House, History, Sun, SettingsIcon } from 'lucide-react';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { ButtonMenu } from './components/buttonMenu';

import './styles/theme.css';
import './styles/global.css';

export function App() {
	return (
		<>
			<Container>
				<Logo />
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
		</>
	);
}
// export { App };
