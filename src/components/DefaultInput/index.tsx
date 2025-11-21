type DefaultInputProps = {
	id: string;
	label: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, label }: DefaultInputProps) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input className='text-black' id={id} type={type} />
		</>
	);
}
