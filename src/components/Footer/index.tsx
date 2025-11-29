import styles from './styles.module.css';

export function Footer() {
	return (
		<>
			<footer className={`${styles.footer} text-[1.2rem]`}>
				<a className='hover:underline' href='#'>
					Entenda como funciona a técnica pomodoro 🍅
				</a>
				<a className='hover:underline' href='#'>
					Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito Com React
					💙
				</a>
			</footer>
		</>
	);
}
