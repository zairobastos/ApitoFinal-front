import { Menur } from "../../components/TelasHome/menu";
import { Titulo } from "../../components/TelasHome/titulo";
import { ListarCadastrar } from "../../components/listarCadastrar";
import { Cards } from "../../components/listarCadastrar/cards";
import { Card } from "../../components/listarCadastrar/card";
import { FormCampeonato } from "../../components/formCampeonato";
import { useEffect, useState } from "react";
import { api } from "../../server/api";

export const Campeonatos = () => {
	const [campeonatos, setCampeonatos] = useState([]);
	useEffect(() => {
		api.get(
			"/campeonato/listarCampeonatos/328790c5-5819-49d6-a3ff-7c7aaa4a6da2"
		)
			.then((res) => {
				setCampeonatos(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<Menur ativo1="ativo" />
			<section className="flex flex-col px-10 mt-32">
				<Titulo
					titulo="Campeonatos"
					subtitulo="Lista de seus campeonatos cadastrados"
				/>
				<ListarCadastrar>
					<Cards>
						{campeonatos.map((campeonato: any) => {
							return (
								<Card
									key={campeonato.id}
									nome={campeonato.nome}
									logo={campeonato.logo}
									descricao={campeonato.descricao}
									tipoCampeonato={campeonato.tipoCampeonato}
									dataFim={campeonato.dataFim}
								/>
							);
						})}
					</Cards>

					<FormCampeonato />
				</ListarCadastrar>
			</section>
		</div>
	);
};
