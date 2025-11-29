import styles from './styles.module.css';

type FormRowProps = {
	children: React.ReactNode;
};

export function FormRow({ children }: FormRowProps) {
	return (
		<>
			<div className={styles.formRow}>{children}</div>
		</>
	);
}
