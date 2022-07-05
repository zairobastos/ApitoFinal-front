import { IoMdArrowDropleft } from "react-icons/io";
import { NomeCampeonato } from "../../components/NomeCampeonato";
import { SubMenu } from "../../components/subMenu";
import { Menur } from "../../components/TelasHome/menu";
import { PartidaFut } from "./style";

export const PartidasCampeonato = () => {
	return (
		<div>
			<Menur ativo1="ativo" />
			<SubMenu ativo2="ativo" />
			<div className="absolute mt-40 px-10 w-full flex flex-col gap-14">
				<NomeCampeonato />
				<main className="flex flex-col gap-3">
					<h2 className="font-padrao text-3xl text-black font-bold">
						PARTIDAS
					</h2>
					<div className="flex flex-wrap w-telaCards ">
						<PartidaFut className="w-80 ">
							<div className="flex flex-wrap">
								<figure className="flex flex-col flex-wrap gap-3 w-48  border-r-2 border-borderForm">
									<div className="flex items-center justify-between pl-2">
										<div className="flex items-center gap-3">
											<img
												src="images/9cfee786e9b7bf41e7a6b5d7fbbb48c4.png"
												alt=""
												width={35}
												height={35}
											/>
											<h3 className="text-xl font-home font-semibold">
												Ceará
											</h3>
										</div>
										<div className="flex flex-wrap gap-1 items-center">
											<p className="text-buttonCard font-bold font-home text-xl">
												1
											</p>
											<IoMdArrowDropleft className="text-buttonCard text-3xl" />
										</div>
									</div>
									<div className="w-48 flex items-center justify-between pl-2">
										<div className="flex items-center gap-3">
											<img
												src="images/9cfee786e9b7bf41e7a6b5d7fbbb48c4.png"
												alt=""
												width={35}
												height={35}
											/>
											<h3 className="text-xl font-home font-semibold">
												Ceará
											</h3>
										</div>
										<div className="flex flex-wrap gap-1 items-center">
											<p className="text-buttonCard font-bold font-home text-xl">
												1
											</p>
											<IoMdArrowDropleft className="text-buttonCard text-3xl" />
										</div>
									</div>
								</figure>
								<div className="pl-3 flex justify-center flex-col items-center gap-3">
									<p className="flex justify-center flex-col items-center">
										<h3 className="text-sm font-home font-semibold text-preto">
											26/07/2022
										</h3>
										<h3 className="text-sm font-home font-semibold text-preto">
											19:00
										</h3>
									</p>
									<h3 className="text-sm font-home font-semibold text-buttonCard">
										ENCERRADO
									</h3>
								</div>
							</div>
						</PartidaFut>
					</div>
				</main>
			</div>
		</div>
	);
};
