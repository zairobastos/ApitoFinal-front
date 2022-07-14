import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NomeCampeonato } from "../../components/NomeCampeonato";
import { PartidasFut } from "../../components/partidas";
import { SubMenu } from "../../components/subMenu";
import { Menur } from "../../components/TelasHome/menu";
import { api } from "../../server/api";

export const PartidasCampeonato = () => {
	const params = useParams();
	const [torneio, setTorneio] = useState([]);
	useEffect(() => {
		api.get(`/campeonato/buscar/${params.id}`)
			.then((res) => {
				setTorneio(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<Menur ativo1="ativo" />
			{torneio.map((torneios: any, index: number) => {
				return (
					<>
						<SubMenu
							ativo2="ativo"
							titulo="Grupos e Tabelas"
							btnEditarAtivo={true}
							pontos={`${torneios.tipoCampeonato}`}
							id={`${params.id}`}
						/>
						;
					</>
				);
			})}
			<div className="absolute mt-40 px-10 w-full flex flex-col gap-14">
				<NomeCampeonato id={`${params.id}`} />
				<main className="flex flex-col gap-3 w-full">
					<h2 className="font-padrao text-3xl text-black font-bold">
						PARTIDAS
					</h2>
					<div className="flex flex-wrap w-4/5 mb-8 gap-6">
						<PartidasFut
							escudo1="../../../public/images/9cfee786e9b7bf41e7a6b5d7fbbb48c4.png"
							data="06/07/2022"
							horario="01:37"
							escudo2="../../../public/images/9cfee786e9b7bf41e7a6b5d7fbbb48c4.png"
							gols1="1"
							gols2="0"
							time1="Ceará"
							time2="Ceará"
							status="FINALIZADA"
						/>
					</div>
				</main>
			</div>
		</div>
	);
};
