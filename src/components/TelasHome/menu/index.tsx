import { Link } from "react-router-dom";
import logo from "../../../assets/images/Logotype (3) 2.svg";
import { Lista } from "./style";

type ativos = {
	ativo?: string;
	ativo1?: string;
	ativo2?: string;
	ativo3?: string;
};

export const Menur = ({ ativo, ativo1, ativo2, ativo3 }: ativos) => {
	return (
		<header className="flex flex-row flex-wrap h-20 shadow-menu  px-10 border-b border-solid border-borderMenu">
			<nav className="flex flex-wrap flex-row items-center gap-x-12">
				<figure>
					<img src={logo} alt="logo" />
				</figure>
				<Lista className="flex flex-row flex-wrap gap-x-7 font-home font-light  text-lg h-full items-center text-navMenu">
					<Link
						to={"/paginaInicial"}
						className={`h-full ${ativo} items-center flex cursor-pointer hover:text-navMenuAtivo transition-colors`}
					>
						INÍCIO
					</Link>
					<Link
						to={"/campeonato"}
						className={`h-full ${ativo1} items-center flex cursor-pointer hover:text-navMenuAtivo transition-colors`}
					>
						CAMPEONATOS
					</Link>
					<Link
						to={"/times"}
						className={`h-full ${ativo2} items-center flex cursor-pointer hover:text-navMenuAtivo transition-colors`}
					>
						TIMES
					</Link>
					<Link
						to={"/jogadores"}
						className={`h-full ${ativo3} items-center flex cursor-pointer hover:text-navMenuAtivo transition-colors`}
					>
						JOGADORES
					</Link>
				</Lista>
			</nav>
			<div>
				<figure></figure>
				<div></div>
			</div>
		</header>
	);
};
