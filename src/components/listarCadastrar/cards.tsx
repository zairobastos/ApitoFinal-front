export const Cards = (props: any) => {
	return (
		<div className="flex flex-row flex-wrap w-telaCards gap-x-gapCards">
			{props.children}
		</div>
	);
};
