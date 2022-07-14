import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../../components/listarCadastrar/cards";
import { ListarJogadoresTimes } from "../../components/listarJogadoresTimes";
import { NomeCampeonato } from "../../components/NomeCampeonato";
import { SubMenu } from "../../components/subMenu";
import { Menur } from "../../components/TelasHome/menu";
import { AuthContext } from "../../context/Auth/AuthContext";
import { api } from "../../server/api";

export const SelecionarTime = () => {
	const params = useParams();
	const [torneio, setTorneio] = useState([]);
	const [times, setTimes] = useState([]);
	const user = useContext(AuthContext);
	useEffect(() => {
		api.get(`/campeonato/buscar/${params.id}`)
			.then((res) => {
				setTorneio(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		api.get(`/times/buscar/${user.user.id}`)
			.then((res) => {
				setTimes(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<>
			<Menur ativo1="ativo" />
			{torneio.map((torneios: any, index: number) => {
				return (
					<>
						<SubMenu
							ativo3="ativo"
							titulo="Times"
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
				<main className="w-full flex-co">
					<h2 className="font-padrao text-3xl text-black font-bold">
						Selecione os Times do Campeonato - (max: 6)
					</h2>
					<form
						action=""
						className="flex flex-wrap justify-start mt-6 gap-gapCards"
					>
						{times.map((times: any, index: number) => {
							return (
								<div className="w-card h-24 mb-8 justify-between border-solid border-borderForm border-2 shadow-menu rounded-xl px-6 py-2">
									<label htmlFor={times.id}>
										<figure className=" flex items-center gap-4  w-full">
											<img
												src={`../../../public/${times.escudo}`}
												alt={times.nome}
												className="h-16 w-16"
											/>
											<h3 className="font-padrao text-xl font-bold text-fontCard">
												{times.nome}
											</h3>
										</figure>
									</label>
									<input
										type="checkbox"
										name={times.nome}
										id={times.id}
										value={times.id}
										className="hidden"
									/>
								</div>
							);
						})}
					</form>
				</main>
			</div>
		</>
	);
};
