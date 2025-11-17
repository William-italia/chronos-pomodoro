import './styles/theme.css';
import './styles/global.css';
import { Clock2 } from 'lucide-react';
import { Heading } from './components/Heading';

export function App() {
	return (
		<>
			<div className='container'>
				<div className='content'>
					<section>
						<Heading>
							<Clock2 />
							<h1>Chronos</h1>
						</Heading>
					</section>
				</div>
			</div>
		</>
	);
}
// export { App };
