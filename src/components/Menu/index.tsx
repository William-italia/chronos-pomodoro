type MenuProps = {
	children: React.ReactNode;
};

export function Menu({ children }: MenuProps) {
	return (
		<div className='flex  items-center justify-center space-x-8 mt-12'>
			{children}
		</div>
	);
}
