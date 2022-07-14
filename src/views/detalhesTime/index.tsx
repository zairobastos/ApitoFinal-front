import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Menur } from "../../components/TelasHome/menu";
import { AuthContext } from "../../context/Auth/AuthContext";
import { api } from "../../server/api";

export const DetalhesTime = () => {
	const params = useParams();
	const [torneio, setTorneio] = useState([]);
	const [jogador, setJogadores] = useState([]);
	const user = useContext(AuthContext);
	useEffect(() => {
		api.get(`/times/buscarTimesId/${params.id}/${user.user.id}`)
			.then((res) => {
				setTorneio(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		api.get(`/jogador/listar/${params.id}`)
			.then((res) => {
				setJogadores(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [api]);
	return (
		<>
			<Menur ativo2="ativo" />
			<div className="absolute mt-40 px-10 w-full flex flex-col gap-14">
				<div className="flex h-32">
					<figure className="flex items-center gap-2">
						{torneio.map((torneios: any) => {
							return (
								<>
									<img
										src={`../../../public/${torneios.escudo}`}
										alt=""
										width={100}
									/>
									<div className="flex flex-col text-preto justify-between items-center h-full">
										<h1 className="text-6xl font-bold mt-8 font-padrao">
											{torneios.nome} -{" "}
											{torneios.abreviacao}
										</h1>
									</div>
								</>
							);
						})}
					</figure>
				</div>
				<main>
					<header className="flex flex-wrap gap-2 justify-between items-start mb-4">
						<h2 className="font-padrao text-3xl text-black font-bold">
							Lista de Jogadores do Time
						</h2>
						<nav className="">
							<ul className="flex flex-wrap gap-4">
								<li className="text-padrao text-xl bg-editar text-fontEditar px-4 py-1 rounded">
									Editar
								</li>
								<li className="text-padrao text-xl bg-excluir text-fontExcluir px-4 py-1 rounded">
									Excluir
								</li>
							</ul>
						</nav>
					</header>
					{jogador.length > 0 ? (
						jogador.map((jogadores: any) => {
							return (
								<>
									<div className="flex flex-col flex-wrap mb-4 w-4/5">
										<div className="flex h-20 first-letter:border-2 border-solid border-borderForm shadow-menu rounded-xl px-6 py-2 items-center justify-between">
											<figure className="flex w-4/12  flex-row flex-wrap items-center gap-6">
												<img
													src={`../../../public/${jogadores.imagem}`}
													alt=""
													width={60}
													height={60}
												/>
												<h3 className="text-xl font-home font-light text-navMenuAtivo">
													{jogadores.nome} -{" "}
													{jogadores.posicao} -{" "}
													{jogadores.numero}
												</h3>
											</figure>
										</div>
									</div>
								</>
							);
						})
					) : (
						<h3>
							Nenhum Jogador está relacionado com esse time no
							momento.
						</h3>
					)}
				</main>
			</div>
		</>
	);
};
