import { ListarCadastrar } from "../../components/listarCadastrar";
import { Cards } from "../../components/listarCadastrar/cards";
import { ListarJogadoresTimes } from "../../components/listarJogadoresTimes";
import { Inputs } from "../../components/login/input";
import { Menur } from "../../components/TelasHome/menu";
import { Titulo } from "../../components/TelasHome/titulo";
import RealMadrid from "../../assets/images/RealMadrid.svg";

export const Times = () => {
	return (
		<div>
			<Menur ativo2="ativo" />
			<section className="flex flex-col px-10 mt-16">
				<Titulo
					titulo="Times"
					subtitulo="Lista de suas equipes de futebol cadastrados"
				/>
				<ListarCadastrar>
					<Cards>
						<ListarJogadoresTimes
							foto={RealMadrid}
							nome="Real Madrid"
						/>
						<ListarJogadoresTimes
							foto={RealMadrid}
							nome="Juventus"
						/>
						<ListarJogadoresTimes
							foto={RealMadrid}
							nome="Barcelona"
						/>
						<ListarJogadoresTimes
							foto={RealMadrid}
							nome="Liverpool"
						/>
					</Cards>
					<div className="flex flex-col w-1/4 border-2 border-solid border-borderForm shadow-menu rounded-xl pt-8 px-5">
						<form action="">
							<h2 className="font-home font-black text-xl text-navMenuAtivo mb-10">
								Novo Time
							</h2>
							<div className="flex flex-col flex-wrap gap-8">
								<Inputs
									label="Nome"
									id="nome"
									placeholder="Nome do Time"
									type="text"
								/>
								<Inputs
									label="Abreviação"
									id="abreviacao"
									placeholder="Abreviação do Time"
									type="text"
								/>
								<button className="bg-buttonCard rounded text-white font-home font-black text-lg py-2 mb-4">
									Cadastrar Time
								</button>
							</div>
						</form>
					</div>
				</ListarCadastrar>
			</section>
		</div>
	);
};
