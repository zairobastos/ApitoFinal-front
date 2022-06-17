import { Inputs } from "../login/input";

export const FormCampeonato = () => {
	return (
		<aside className="flex h-full flex-col w-1/4 border-2 border-solid border-borderForm shadow-menu rounded-xl pt-8 px-5">
			<form action="">
				<h2 className="font-home font-black text-xl text-navMenuAtivo mb-10">
					Novo Campeonato
				</h2>
				<div className="flex flex-col flex-wrap gap-8">
					<Inputs
						label="Nome"
						id="nome"
						placeholder="Nome do Campeonato"
						type="text"
					/>
					<Inputs
						label="Premiação"
						id="premiacao"
						placeholder="Premiação"
						type="number"
					/>
					<Inputs
						label="Data de Início"
						id="dataInicio"
						placeholder="Data de Início"
						type="date"
					/>
					<Inputs
						label="Data de Término"
						id="dataTermino"
						placeholder="Data de Término"
						type="date"
					/>
					<button className="bg-buttonCard rounded text-white font-home font-black text-lg py-2 mb-4">
						Cadastrar Campeonato
					</button>
				</div>
			</form>
		</aside>
	);
};
