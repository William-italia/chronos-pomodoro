import styles from './styles.module.css';

import { Timer } from 'lucide-react';

export function Logo() {
	return (
		<div className='flex items-center justify-center'>
			<a className={`${styles.logoLink} flex flex-col items-center`} href='#'>
				<Timer size={100} className='' />
				<h1 className='text-[4.2rem] font-bold'>Chronos</h1>
			</a>
		</div>
	);
}
