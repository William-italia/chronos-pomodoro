import styles from './styles.module.css';

type buttonMenuProps = {
	children: React.ReactNode;
};

export function ButtonMenu({ children }: buttonMenuProps) {
	return (
		<a className={`${styles.button} inline-block p-4 rounded-xl`} href='#'>
			{children}
		</a>
	);
}
