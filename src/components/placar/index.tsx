type dados = {
	timeX?: string;
	timeY?: string;
	nomeX: string;
	nomeY: string;
	golsX: number;
	golsY: number;
};

export const Placar = ({ timeX, golsX, timeY, golsY, nomeX, nomeY }: dados) => {
	return (
		<figure className="flex flex-row flex-wrap items-center justify-between">
			<img src={timeX} alt={nomeX} />
			<p className="text-xl font-home font-semibold tracking-widest">
				{golsX} : {golsY}
			</p>
			<img src={timeY} alt={nomeY} />
		</figure>
	);
};
