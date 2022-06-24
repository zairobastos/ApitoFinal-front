import Tabela from "../../assets/images/Tabela.png";
import PlayOff from "../../assets/images/PlayOff.png";
import Prosseguir from "../../assets/images/Prosseguir.svg";

type dados = {
	logoCampeonato?: string;
	nomeCampeonato: string;
	tipoCampeonato: string;
	statusCampeonato: string;
};

export const ListaCampeonatos = ({
	logoCampeonato,
	nomeCampeonato,
	tipoCampeonato,
	statusCampeonato,
}: dados) => {
	return (
		<div className="flex flex-col flex-wrap mb-4">
			<div className="flex border-2 border-solid border-borderForm shadow-menu rounded-xl px-6 py-2 items-center justify-between">
				<figure className="flex flex-row flex-wrap items-center gap-6">
					<img src={logoCampeonato} alt="" />
					<h3 className="text-xl font-home font-light text-navMenuAtivo">
						{nomeCampeonato}
					</h3>
				</figure>
				<main className="flex flex-row flex-wrap gap-x-9 ">
					<figure>
						{tipoCampeonato === "pontosCorridos" ? (
							<img src={Tabela} alt="Tabela de Pontos Corridos" />
						) : (
							<img src={PlayOff} alt="Campeonato de Play Off" />
						)}
					</figure>
					<p className="text-lg font-home font-light text-navMenuAtivo">
						{statusCampeonato}
					</p>
				</main>
				<footer className="flex flex-row flex-wrap gap-2 items-center">
					<p className="text-buttonCard text-base font-light font-home">
						Ver Detalhes
					</p>
					<img src={Prosseguir} alt="" />
				</footer>
			</div>
		</div>
	);
};