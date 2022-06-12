import { Menur } from "../../components/TelasHome/menu";
import { Titulo } from "../../components/TelasHome/titulo";
import premierLeague from "../../assets/images/premierLeague.png";
import { Inputs } from "../../components/login/input";
import { ListarCadastrar } from "../../components/listarCadastrar";
import { Cards } from "../../components/listarCadastrar/cards";
import { Card } from "../../components/listarCadastrar/card";

export const Campeonatos = () => {
	return (
		<div>
			<Menur ativo1="ativo" />
			<section className="flex flex-col px-10 mt-16">
				<Titulo
					titulo="Campeonatos"
					subtitulo="Lista de seus campeonatos cadastrados"
				/>
				<ListarCadastrar>
					<Cards>
						<Card
							logo={premierLeague}
							nome="Premier League"
							descricao="Premier League 2022"
							tipoCampeonato="Pontos Corridos"
							dataFim="10/06/2022"
						/>
						<Card
							logo={premierLeague}
							nome="Premier League"
							descricao="Premier League 2022"
							tipoCampeonato="Pontos Corridos"
							dataFim="10/06/2022"
						/>
						<Card
							logo={premierLeague}
							nome="Premier League"
							descricao="Premier League 2022"
							tipoCampeonato="Pontos Corridos"
							dataFim="10/06/2022"
						/>
						<Card
							logo={premierLeague}
							nome="Premier League"
							descricao="Premier League 2022"
							tipoCampeonato="Pontos Corridos"
							dataFim="10/06/2022"
						/>
					</Cards>

					<div className="flex flex-col w-1/4 border-2 border-solid border-borderForm shadow-menu rounded-xl pt-8 px-5">
						<form action="">
							<h2 className="font-home font-black text-xl text-navMenuAtivo mb-10">
								Novo Campeonato
							</h2>
							<div className="flex flex-col flex-wrap gap-8">
								<Inputs
									label="Nome"
									id="nome"
									placeholder="Nome do Campeonato"
									type="text"
								/>
								<Inputs
									label="Premiação"
									id="premiacao"
									placeholder="Premiação"
									type="number"
								/>
								<Inputs
									label="Data de Início"
									id="dataInicio"
									placeholder="Data de Início"
									type="date"
								/>
								<Inputs
									label="Data de Término"
									id="dataTermino"
									placeholder="Data de Término"
									type="date"
								/>
								<button className="bg-buttonCard rounded text-white font-home font-black text-lg py-2 mb-4">
									Cadastrar Campeonato
								</button>
							</div>
						</form>
					</div>
				</ListarCadastrar>
			</section>
		</div>
	);
};
