import { ListarCadastrar } from "../../components/listarCadastrar";
import { Cards } from "../../components/listarCadastrar/cards";
import { ListarJogadoresTimes } from "../../components/listarJogadoresTimes";
import { Inputs } from "../../components/login/input";
import { Menur } from "../../components/TelasHome/menu";
import { Titulo } from "../../components/TelasHome/titulo";
import Rafinha from "../../assets/images/rafinha.png";

export const Jogadores = () => {
	return (
		<div>
			<Menur ativo3="ativo" />

			<section className="flex flex-col px-10 mt-16 ">
				<Titulo
					titulo="Jogadores"
					subtitulo="Lista de seus jogadores de futebol cadastrados"
				/>
				<ListarCadastrar>
					<Cards>
						<ListarJogadoresTimes foto={Rafinha} nome="Rafinha" />
						<ListarJogadoresTimes foto={Rafinha} nome="Joãozinho" />
						<ListarJogadoresTimes foto={Rafinha} nome="Zairinho" />
						<ListarJogadoresTimes foto={Rafinha} nome="Luizinho" />
					</Cards>
					<div className="flex flex-col w-1/4 border-2 border-solid border-borderForm shadow-menu rounded-xl pt-8 px-5">
						<form action="">
							<h2 className="font-home font-black text-xl text-navMenuAtivo mb-10">
								Novo Jogador
							</h2>
							<div className="flex flex-col flex-wrap gap-8">
								<Inputs
									label="Nome"
									id="nome"
									placeholder="Nome do Jogador"
									type="text"
								/>
								<Inputs
									label="Abreviação"
									id="abreviacao"
									placeholder="Abreviação do Time"
									type="text"
								/>
								<button className="bg-buttonCard rounded text-white font-home font-black text-lg py-2 mb-4">
									Cadastrar Jogador
								</button>
							</div>
						</form>
					</div>
				</ListarCadastrar>
			</section>
		</div>
	);
};
