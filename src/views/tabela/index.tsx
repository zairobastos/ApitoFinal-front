import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
				<main className="flex w-full h-full gap-8 mb-11">
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
										<span>2</span> Athletico-PR
									</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										27
									</td>
									<td className="w-tabela text-center">15</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										3
									</td>
									<td className="w-tabela text-center">5</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										4
									</td>
									<td className="w-tabela text-center">19</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										15
									</td>
									<td className="w-tabela text-center">4</td>
								</tr>
								<tr className="flex w-full justify-start items-center h-14 border-b border-borderTabela">
									<td className="w-1/5 text-left border-r-2 border-borderDireitaTimes h-full flex items-center gap-2">
										<span>3</span> Atlético-MG
									</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										27
									</td>
									<td className="w-tabela text-center">15</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										7
									</td>
									<td className="w-tabela text-center">5</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										3
									</td>
									<td className="w-tabela text-center">17</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										14
									</td>
									<td className="w-tabela text-center">3</td>
								</tr>
								<tr className="flex w-full justify-start items-center h-14 border-b border-borderTabela">
									<td className="w-1/5 text-left border-r-2 border-borderDireitaTimes h-full flex items-center gap-2">
										<span>4</span> Corinthans
									</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										26
									</td>
									<td className="w-tabela text-center">15</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										7
									</td>
									<td className="w-tabela text-center">5</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										3
									</td>
									<td className="w-tabela text-center">17</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										14
									</td>
									<td className="w-tabela text-center">3</td>
								</tr>
								<tr className="flex w-full justify-start items-center h-14 border-b border-borderTabela">
									<td className="w-1/5 text-left border-r-2 border-borderDireitaTimes h-full flex items-center gap-2">
										<span>5</span> Internacional
									</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										25
									</td>
									<td className="w-tabela text-center">15</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										6
									</td>
									<td className="w-tabela text-center">7</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										2
									</td>
									<td className="w-tabela text-center">22</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										15
									</td>
									<td className="w-tabela text-center">7</td>
								</tr>
								<tr className="flex w-full justify-start items-center h-14 border-b border-borderTabela">
									<td className="w-1/5 text-left border-r-2 border-borderDireitaTimes h-full flex items-center gap-2">
										<span>6</span> Fluminense
									</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										24
									</td>
									<td className="w-tabela text-center">15</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										7
									</td>
									<td className="w-tabela text-center">3</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										5
									</td>
									<td className="w-tabela text-center">20</td>
									<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
										14
									</td>
									<td className="w-tabela text-center">6</td>
								</tr>
							</tbody>
						</div>
					</table>
					<div className="flex flex-col pl-8 w-2/5 border-l gap-3 border-l-borderDireitaTimes">
						<h2 className="font-padrao text-3xl text-black font-bold">
							JOGOS
						</h2>
						<ul className="flex flex-col w-full">
							<li className="flex justify-between items-center h-14 border-t-2 border-borderTopTabela border-b-2 border-borderTituloTabela">
								<IoIosArrowBack className="text-2xl" />
								<p className="text-2xl font-bold font-padrao">
									15ª RODADA
								</p>
								<IoIosArrowForward className="text-2xl" />
							</li>
							<li className="w-full h-28 flex flex-col border-b border-borderTabela py-3 gap-3 items-center">
								<header>
									<p className="font-padrao font-bold text-xs">
										SÁB 02/07/2022{" "}
										<span className="font-normal">
											MARACANÃ{" "}
										</span>
										16:30
									</p>
								</header>
								<main className="flex gap-4">
									<figure className="flex gap-2 items-center">
										<h3>FLU</h3>
										<img
											src="images/463debd5f273f60bf2bcee425f931223.png"
											alt="Fluminense"
											width={30}
											height={30}
										/>
									</figure>
									<div className="flex items-center gap-3">
										<h2 className="font-sans font-bold text-xl">
											4
										</h2>
										<p className="font-sans font-normal text-base">
											x
										</p>
										<h2 className="font-sans font-bold text-xl">
											0
										</h2>
									</div>
									<figure className="flex gap-2 items-center">
										<img
											src="images/463debd5f273f60bf2bcee425f931223.png"
											alt="Fluminense"
											width={30}
											height={30}
										/>
										<h3>FLU</h3>
									</figure>
								</main>
								<footer>
									<h2 className="text-xs font-sans text-buttonCard font-semibold">
										VEJA COMO FOI
									</h2>
								</footer>
							</li>
							<li className="w-full h-28 flex flex-col border-b border-borderTabela py-3 gap-3 items-center">
								<header>
									<p className="font-padrao font-bold text-xs">
										SÁB 02/07/2022{" "}
										<span className="font-normal">
											MARACANÃ{" "}
										</span>
										16:30
									</p>
								</header>
								<main className="flex gap-4">
									<figure className="flex gap-2 items-center">
										<h3>FLU</h3>
										<img
											src="images/463debd5f273f60bf2bcee425f931223.png"
											alt="Fluminense"
											width={30}
											height={30}
										/>
									</figure>
									<div className="flex items-center gap-3">
										<h2 className="font-sans font-bold text-xl">
											4
										</h2>
										<p className="font-sans font-normal text-base">
											x
										</p>
										<h2 className="font-sans font-bold text-xl">
											0
										</h2>
									</div>
									<figure className="flex gap-2 items-center">
										<img
											src="images/463debd5f273f60bf2bcee425f931223.png"
											alt="Fluminense"
											width={30}
											height={30}
										/>
										<h3>FLU</h3>
									</figure>
								</main>
								<footer>
									<h2 className="text-xs font-sans text-buttonCard font-semibold">
										VEJA COMO FOI
									</h2>
								</footer>
							</li>
							<li className="w-full h-28 flex flex-col border-b border-borderTabela py-3 gap-3 items-center">
								<header>
									<p className="font-padrao font-bold text-xs">
										SÁB 02/07/2022{" "}
										<span className="font-normal">
											MARACANÃ{" "}
										</span>
										16:30
									</p>
								</header>
								<main className="flex gap-4">
									<figure className="flex gap-2 items-center">
										<h3>FLU</h3>
										<img
											src="images/463debd5f273f60bf2bcee425f931223.png"
											alt="Fluminense"
											width={30}
											height={30}
										/>
									</figure>
									<div className="flex items-center gap-3">
										<h2 className="font-sans font-bold text-xl">
											4
										</h2>
										<p className="font-sans font-normal text-base">
											x
										</p>
										<h2 className="font-sans font-bold text-xl">
											0
										</h2>
									</div>
									<figure className="flex gap-2 items-center">
										<img
											src="images/463debd5f273f60bf2bcee425f931223.png"
											alt="Fluminense"
											width={30}
											height={30}
										/>
										<h3>FLU</h3>
									</figure>
								</main>
								<footer>
									<h2 className="text-xs font-sans text-buttonCard font-semibold">
										VEJA COMO FOI
									</h2>
								</footer>
							</li>
						</ul>
					</div>
				</main>
			</div>
		</div>
	);
};
