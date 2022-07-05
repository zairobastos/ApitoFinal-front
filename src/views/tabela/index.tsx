import { NomeCampeonato } from "../../components/NomeCampeonato";
import { SubMenu } from "../../components/subMenu";
import { Menur } from "../../components/TelasHome/menu";

export const Tabela = () => {
	return (
		<div>
			<Menur ativo1="ativo" />
			<SubMenu ativo1="ativo" />
			<div className="absolute mt-40 px-10 w-full flex flex-col gap-14">
				<NomeCampeonato />
				<table className="flex flex-col w-3/5 justify-between gap-3">
					<h2 className="font-padrao text-3xl text-black font-bold">
						TABELA
					</h2>
					<div className="font-padrao text-lg font-semibold text-black">
						<thead className="flex w-full text-base border-t-2 border-borderTopTabela">
							<tr className="flex w-full border-b-2 h-14 items-center border-borderTituloTabela justify-between">
								<th className="w-1/5 text-left h-full flex items-center border-r-2 border-borderDireitaTimes">
									CLASSIFICAÇÃO
								</th>
								<th className="w-tabela text-center ">P</th>
								<th className="w-tabela text-center">J</th>
								<th className="w-tabela text-center">V</th>
								<th className="w-tabela text-center">E</th>
								<th className="w-tabela text-center">D</th>
								<th className="w-tabela text-center">GP</th>
								<th className="w-tabela text-center">GC</th>
								<th className="w-tabela text-center">SG</th>
							</tr>
						</thead>
						<tbody className="flex flex-col w-full mt-0">
							<tr className="flex w-full justify-start items-center h-14 border-b border-borderTabela">
								<td className="w-1/5 text-left border-r-2 border-borderDireitaTimes h-full flex items-center gap-2">
									<span>1</span> Palmeiras
								</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									29
								</td>
								<td className="w-tabela text-center">15</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									8
								</td>
								<td className="w-tabela text-center">5</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									2
								</td>
								<td className="w-tabela text-center">27</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									12
								</td>
								<td className="w-tabela text-center">15</td>
							</tr>
							<tr className="flex w-full justify-start items-center h-14 border-b border-borderTabela">
								<td className="w-1/5 text-left border-r-2 border-borderDireitaTimes h-full flex items-center gap-2">
									<span>1</span> Palmeiras
								</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									29
								</td>
								<td className="w-tabela text-center">15</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									8
								</td>
								<td className="w-tabela text-center">5</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									2
								</td>
								<td className="w-tabela text-center">27</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									12
								</td>
								<td className="w-tabela text-center">15</td>
							</tr>
							<tr className="flex w-full justify-start items-center h-14 border-b border-borderTabela">
								<td className="w-1/5 text-left border-r-2 border-borderDireitaTimes h-full flex items-center gap-2">
									<span>1</span> Palmeiras
								</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									29
								</td>
								<td className="w-tabela text-center">15</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									8
								</td>
								<td className="w-tabela text-center">5</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									2
								</td>
								<td className="w-tabela text-center">27</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									12
								</td>
								<td className="w-tabela text-center">15</td>
							</tr>
							<tr className="flex w-full justify-start items-center h-14 border-b border-borderTabela">
								<td className="w-1/5 text-left border-r-2 border-borderDireitaTimes h-full flex items-center gap-2">
									<span>1</span> Palmeiras
								</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									29
								</td>
								<td className="w-tabela text-center">15</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									8
								</td>
								<td className="w-tabela text-center">5</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									2
								</td>
								<td className="w-tabela text-center">27</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									12
								</td>
								<td className="w-tabela text-center">15</td>
							</tr>
							<tr className="flex w-full justify-start items-center h-14 border-b border-borderTabela">
								<td className="w-1/5 text-left border-r-2 border-borderDireitaTimes h-full flex items-center gap-2">
									<span>1</span> Palmeiras
								</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									29
								</td>
								<td className="w-tabela text-center">15</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									8
								</td>
								<td className="w-tabela text-center">5</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									2
								</td>
								<td className="w-tabela text-center">27</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									12
								</td>
								<td className="w-tabela text-center">15</td>
							</tr>
							<tr className="flex w-full justify-start items-center h-14 border-b border-borderTabela">
								<td className="w-1/5 text-left border-r-2 border-borderDireitaTimes h-full flex items-center gap-2">
									<span>1</span> Palmeiras
								</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									29
								</td>
								<td className="w-tabela text-center">15</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									8
								</td>
								<td className="w-tabela text-center">5</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									2
								</td>
								<td className="w-tabela text-center">27</td>
								<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
									12
								</td>
								<td className="w-tabela text-center">15</td>
							</tr>
						</tbody>
					</div>
				</table>
			</div>
		</div>
	);
};
