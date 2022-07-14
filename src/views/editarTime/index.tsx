import { useContext, useEffect, useState } from "react";
import { Menur } from "../../components/TelasHome/menu";
import { AuthContext } from "../../context/Auth/AuthContext";
import { api } from "../../server/api";
import { useParams } from "react-router-dom";

export const EditarTime = () => {
	const [times, setTimes] = useState<any[]>([]);
	const params = useParams();
	const user = useContext(AuthContext);
	useEffect(() => {
		api.get(`/times/buscarTimesId/${params.id}/${user.user.id}`)
			.then((res) => {
				setTimes(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [user]);

	const [nome, setNome] = useState("");
	const [abreviacao, setAbreviacao] = useState("");

	const changeNome = (e: any) => {
		setNome(e.target.value);
	};
	const changeAbreviacao = (e: any) => {
		setAbreviacao(e.target.value);
	};

	return (
		<>
			<Menur ativo2="ativo" />
			<main className="flex justify-center">
				<div className="flex mt-36 flex-col w-1/2 border-2 border-solid border-borderForm shadow-menu rounded-xl pt-8 px-5">
					<h2 className="font-home font-black text-xl text-navMenuAtivo mb-10">
						Novo Time
					</h2>
					<form
						action="http://localhost:3333/times/update"
						method="post"
						className="flex flex-col flex-wrap gap-8"
					>
						<div className="flex flex-col flex-wrap gap-8 w-full">
							<div className="flex flex-col flex-wrap gap-1.5">
								<label
									htmlFor="nome"
									className="text-base font-sans font-semibold leading-4 text-labelLogin"
								>
									Nome
								</label>
								<input
									type="text"
									name="nome"
									id="nome"
									placeholder="Nome"
									onChange={changeNome}
									value={nome}
									required
									className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid `}
								/>
							</div>
							<div className="flex flex-col flex-wrap gap-1.5">
								<label
									htmlFor="abreviacao"
									className="text-base font-sans font-semibold leading-4 text-labelLogin"
								>
									Abreviação
								</label>
								<input
									type="text"
									name="abreviacao"
									id="abreviacao"
									placeholder="Abreviação"
									maxLength={3}
									onChange={changeAbreviacao}
									value={abreviacao}
									required
									className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid`}
								/>
							</div>
							<button
								type="submit"
								className={`rounded text-white font-home font-black text-lg py-2 mb-4 bg-buttonCard`}
							>
								Atualizar Time
							</button>
						</div>
					</form>
				</div>
			</main>
		</>
	);
};
