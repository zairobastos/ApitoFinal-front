import { Menur } from "../../components/TelasHome/menu";
import comecarCampeonato from "../../assets/images/ComecarCampeonato.png";
import { FormCampeonato } from "../../components/formCampeonato";
import Valencia from "../../assets/images/Valencia.svg";
import CeltaDeVigo from "../../assets/images/CeltaDeVigo.svg";
import { Placar } from "../../components/placar";
import { ListaCampeonatos } from "../../components/listaCampeonatos";
import Brasileirao from "../../assets/images/Brasileirao.png";
import { VerTodosBtn } from "../../components/verTodosBtn/Index";
import { useEffect, useState } from "react";
import { api } from "../../server/api";

export const PaginaInicial = () => {
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
			<Menur ativo="ativo" />
			<section className="flex flex-row flex-wrap px-10 mt-32 gap-7 mb-4">
				<aside className="flex flex-col w-1/5 border-2 border-solid border-borderForm shadow-menu rounded-xl py-8 px-5 h-full">
					<h2 className="font-home font-black text-xl text-navMenuAtivo mb-10">
						Partidas Recentes
					</h2>
					<div className="flex flex-col flex-wrap gap-6 mx-2">
						<Placar
							timeX={Valencia}
							golsX={1}
							nomeX="Valencia"
							timeY={CeltaDeVigo}
							golsY={2}
							nomeY="Celta de Vigo"
						/>
						<Placar
							timeX={Valencia}
							golsX={1}
							nomeX="Valencia"
							timeY={CeltaDeVigo}
							golsY={2}
							nomeY="Celta de Vigo"
						/>
						<Placar
							timeX={Valencia}
							golsX={1}
							nomeX="Valencia"
							timeY={CeltaDeVigo}
							golsY={2}
							nomeY="Celta de Vigo"
						/>
						<Placar
							timeX={Valencia}
							golsX={1}
							nomeX="Valencia"
							timeY={CeltaDeVigo}
							golsY={2}
							nomeY="Celta de Vigo"
						/>
						<Placar
							timeX={Valencia}
							golsX={1}
							nomeX="Valencia"
							timeY={CeltaDeVigo}
							golsY={2}
							nomeY="Celta de Vigo"
						/>
						<Placar
							timeX={Valencia}
							golsX={1}
							nomeX="Valencia"
							timeY={CeltaDeVigo}
							golsY={2}
							nomeY="Celta de Vigo"
						/>
					</div>
				</aside>
				<main className="flex flex-col w-1/2">
					<figure>
						<img
							src={comecarCampeonato}
							alt="Começar Campeonato"
							className="w-full h-52"
						/>
					</figure>
					<main className="flex flex-col flex-wrap mt-9">
						<header className="mb-5 flex flex-row gap-96">
							<h2 className="text-xl font-home font-bold">
								Últimos Campeonatos
							</h2>
							<VerTodosBtn
								route="/campeonato"
								classNome="font-padrao text-lg font-bold text-verde-claro"
							/>
						</header>
						{campeonatos.map((campeonato: any) => {
							return (
								<ListaCampeonatos
									nomeCampeonato={campeonato.nome}
									statusCampeonato={campeonato.situacao}
									tipoCampeonato={campeonato.tipoCampeonato}
									logoCampeonato={campeonato.logo}
									id={campeonato.id}
									key={campeonato.id}
								/>
							);
						})}
					</main>
				</main>
				<FormCampeonato />
			</section>
		</div>
	);
};
