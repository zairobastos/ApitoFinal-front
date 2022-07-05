import Calendario from "../../assets/images/calendar.svg";
export const NomeCampeonato = () => {
	return (
		<div className="flex h-32">
			<figure className="flex items-center gap-2">
				<img
					src="images/campeonatos/premier-league-2-logo 2.svg"
					alt=""
				/>
				<div className="flex flex-col text-preto justify-between items-center h-full">
					<h1 className="text-6xl font-bold mt-8 font-padrao">
						Premier League
					</h1>
					<figure className="flex gap-8">
						<div className="flex gap-1 items-center">
							<img src={Calendario} alt="Data de Início" />
							<p>04/07/2022</p>
						</div>
						<div className="flex gap-1 items-center">
							<img src={Calendario} alt="Data de Fim" />
							<p>04/07/2022</p>
						</div>
					</figure>
				</div>
			</figure>
		</div>
	);
};
