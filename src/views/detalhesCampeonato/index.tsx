import { Menur } from "../../components/TelasHome/menu";
import { SubMenu } from "../../components/subMenu";
import { NomeCampeonato } from "../../components/NomeCampeonato";

export const DetalhesCampeonato = () => {
	return (
		<div>
			<Menur ativo1="ativo" />
			<SubMenu ativo="ativo" titulo="Detalhes" btnEditarAtivo={true}/>
			<div className="absolute mt-40 px-10 w-full flex flex-col gap-14">
				<NomeCampeonato />
				<main className="flex flex-col gap-7 z-0">
					<div className="flex flex-col">
						<h3 className="uppercase text-buttonCard font-padrao font-black text-lg">
							Descrição
						</h3>
						<p className="text-preto text-lg">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="flex flex-col">
						<h3 className="uppercase text-buttonCard font-padrao font-black text-lg">
							Premiação
						</h3>
						<p className="text-preto text-lg">R$ 5.000.000,00</p>
					</div>
					<div className="flex flex-col">
						<h3 className="uppercase text-buttonCard font-padrao font-black text-lg">
							Tipo de Campeonato
						</h3>
						<p className="text-preto text-lg">Pontos Corridos</p>
					</div>
				</main>
			</div>
		</div>
	);
};
