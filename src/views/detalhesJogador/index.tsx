import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Menur } from "../../components/TelasHome/menu";
import { api } from "../../server/api";

export const DetalhesJogador = () => {
	const params = useParams();
	const [torneio, setTorneio] = useState<any[]>([]);
	useEffect(() => {
		api.get(`jogador/listarId/${params.id}`)
			.then((res) => {
				setTorneio(res.data);
			})
			.catch((err) => {});
	}, [api]);

	const navigate = useNavigate();
	const deletar = () => {
		let confirmacao = window.confirm("Deseja deletar o jogador?");
		if (confirmacao) {
			api.delete(`/jogador/deletar/${params.id}`)
				.then((res) => {
					navigate("/jogadores");
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<>
			<Menur ativo3="ativo" />
			<div className="absolute mt-40 px-10 w-full flex flex-col gap-14">
				<div className="flex h-32">
					<figure className="flex items-center gap-2">
						{torneio.map((torneios: any) => {
							return (
								<>
									<img
										src={`../../../public/${torneios.imagem}`}
										alt=""
										width={100}
									/>
									<div className="flex flex-col text-preto justify-between items-center h-full">
										<h1 className="text-6xl font-bold mt-8 font-padrao">
											{torneios.nome} - {torneios.posicao}{" "}
											- {torneios.numero}
										</h1>
									</div>
								</>
							);
						})}
					</figure>
				</div>
				<main>
					<header className="flex flex-wrap gap-2 justify-between items-start mb-4">
						<nav className="">
							<ul className="flex flex-wrap gap-4">
								<li className="text-padrao text-xl bg-editar text-fontEditar px-4 py-1 rounded">
									Editar
								</li>
								<li
									onClick={deletar}
									className="text-padrao cursor-pointer text-xl bg-excluir text-fontExcluir px-4 py-1 rounded"
								>
									Excluir
								</li>
							</ul>
						</nav>
					</header>
				</main>
			</div>
		</>
	);
};
