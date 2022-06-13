import { Menur } from "../../components/TelasHome/menu";
import { Titulo } from "../../components/TelasHome/titulo";
import premierLeague from "../../assets/images/premierLeague.png";
import { ListarCadastrar } from "../../components/listarCadastrar";
import { Cards } from "../../components/listarCadastrar/cards";
import { Card } from "../../components/listarCadastrar/card";
import { FormCampeonato } from "../../components/formCampeonato";

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

					<FormCampeonato />
				</ListarCadastrar>
			</section>
		</div>
	);
};
