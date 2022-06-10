import { Menur } from "../../components/TelasHome/menu";
import { Titulo } from "../../components/TelasHome/titulo";
import { Figure } from "./style";
import premierLeague from "../../assets/images/premierLeague.png";
import calendar from "../../assets/images/calendar.svg";
import prosseguir from "../../assets/images/Prosseguir.svg";
import { Inputs } from "../../components/login/input";

export const Campeonatos = () => {
	return (
		<div>
			<Menur ativo1="ativo" />
			<section className="flex flex-col px-10 mt-16">
				<Titulo
					titulo="Campeonatos"
					subtitulo="Lista de seus campeonatos cadastrados"
				/>
				<div className="flex flex-row flex-wrap gap-gapCards mt-8 items-start">
					<div className="flex flex-row flex-wrap w-telaCards gap-x-gapCards">
						<div className="flex w-card flex-col mb-8 border-2 border-solid shadow-menu border-borderCard rounded-xl">
							<Figure>
								<img
									src={premierLeague}
									alt="logo do campeonato"
								/>
								<h3 className="font-padrao font-semibold">
									Premier League
								</h3>
							</Figure>
							<div className="flex flex-col mt-5 ml-4">
								<ul className="flex flex-col gap-1">
									<li className="font-home font-light text-base text-fontCard">
										Pontos Corridos
									</li>
									<li className="font-home font-light text-base text-fontCard">
										Premier League 2022
									</li>
								</ul>
								<div className="flex flex-row flex-wrap gap-3">
									<figure className="flex flex-row flex-wrap items-center gap-2">
										<img src={calendar} alt="calendario" />
										<p className="font-home font-light text-base text-fontCard">
											10/06/2022
										</p>
									</figure>
								</div>
								<figure className="flex flex-row flex-wrap items-center h-full mb-7 justify-end mt-7 pr-7 gap-1">
									<p className="text-verde-claro font-home h-full  flex items-center font-bold text-base">
										Ver Detalhes
									</p>
									<img
										src={prosseguir}
										alt="seta de prosseguir"
										className=""
									/>
								</figure>
							</div>
						</div>
						<div className="flex w-card flex-col mb-8 border-2 border-solid shadow-menu border-borderCard rounded-xl">
							<Figure>
								<img
									src={premierLeague}
									alt="logo do campeonato"
								/>
								<h3 className="font-padrao font-semibold">
									Premier League
								</h3>
							</Figure>
							<div className="flex flex-col mt-5 ml-4">
								<ul className="flex flex-col gap-1">
									<li className="font-home font-light text-base text-fontCard">
										Pontos Corridos
									</li>
									<li className="font-home font-light text-base text-fontCard">
										Premier League 2022
									</li>
								</ul>
								<div className="flex flex-row flex-wrap gap-3">
									<figure className="flex flex-row flex-wrap items-center gap-2">
										<img src={calendar} alt="calendario" />
										<p className="font-home font-light text-base text-fontCard">
											10/06/2022
										</p>
									</figure>
								</div>
								<figure className="flex flex-row flex-wrap items-center h-full mb-7 justify-end mt-7 pr-7 gap-1">
									<p className="text-verde-claro font-home h-full  flex items-center font-bold text-base">
										Ver Detalhes
									</p>
									<img
										src={prosseguir}
										alt="seta de prosseguir"
										className=""
									/>
								</figure>
							</div>
						</div>
						<div className="flex w-card flex-col mb-8 border-2 border-solid shadow-menu border-borderCard rounded-xl">
							<Figure>
								<img
									src={premierLeague}
									alt="logo do campeonato"
								/>
								<h3 className="font-padrao font-semibold">
									Premier League
								</h3>
							</Figure>
							<div className="flex flex-col mt-5 ml-4">
								<ul className="flex flex-col gap-1">
									<li className="font-home font-light text-base text-fontCard">
										Pontos Corridos
									</li>
									<li className="font-home font-light text-base text-fontCard">
										Premier League 2022
									</li>
								</ul>
								<div className="flex flex-row flex-wrap gap-3">
									<figure className="flex flex-row flex-wrap items-center gap-2">
										<img src={calendar} alt="calendario" />
										<p className="font-home font-light text-base text-fontCard">
											10/06/2022
										</p>
									</figure>
								</div>
								<figure className="flex flex-row flex-wrap items-center h-full mb-7 justify-end mt-7 pr-7 gap-1">
									<p className="text-verde-claro font-home h-full  flex items-center font-bold text-base">
										Ver Detalhes
									</p>
									<img
										src={prosseguir}
										alt="seta de prosseguir"
										className=""
									/>
								</figure>
							</div>
						</div>
						<div className="flex w-card flex-col mb-8 border-2 border-solid shadow-menu border-borderCard rounded-xl">
							<Figure>
								<img
									src={premierLeague}
									alt="logo do campeonato"
								/>
								<h3 className="font-padrao font-semibold">
									Premier League
								</h3>
							</Figure>
							<div className="flex flex-col mt-5 ml-4">
								<ul className="flex flex-col gap-1">
									<li className="font-home font-light text-base text-fontCard">
										Pontos Corridos
									</li>
									<li className="font-home font-light text-base text-fontCard">
										Premier League 2022
									</li>
								</ul>
								<div className="flex flex-row flex-wrap gap-3">
									<figure className="flex flex-row flex-wrap items-center gap-2">
										<img src={calendar} alt="calendario" />
										<p className="font-home font-light text-base text-fontCard">
											10/06/2022
										</p>
									</figure>
								</div>
								<figure className="flex flex-row flex-wrap items-center h-full mb-7 justify-end mt-7 pr-7 gap-1">
									<p className="text-verde-claro font-home h-full  flex items-center font-bold text-base">
										Ver Detalhes
									</p>
									<img
										src={prosseguir}
										alt="seta de prosseguir"
										className=""
									/>
								</figure>
							</div>
						</div>
					</div>

					<div className="flex flex-col w-1/4 border-2 border-solid border-borderForm shadow-menu rounded-xl pt-8 px-5">
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
					</div>
				</div>
			</section>
		</div>
	);
};
