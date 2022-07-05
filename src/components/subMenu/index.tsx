import { IoIosArrowBack } from "react-icons/io";
import Descricao from "../../assets/images/descricao.svg";
import Tabela from "../../assets/images/Tabela.svg";
import Campo from "../../assets/images/campo.svg";
import Player from "../../assets/images/Player.svg";

export const SubMenu = () => {
	return (
		<nav className="flex z-10 bg-preto mt-20 fixed w-full justify-between items-center text-white">
			<div className="h-14 flex flex-wrap items-center">
				<ul className="h-full flex flex-wrap gap-2">
					<li className="w-11 flex flex-wrap justify-center h-full items-center">
						<IoIosArrowBack className="text-lg" />
					</li>
					<li className="w-11 flex bg-verde-claro flex-wrap justify-center h-full items-center">
						<img src={Descricao} alt="Icone de descricao" />
					</li>
					<li className="w-11 flex flex-wrap justify-center h-full items-center">
						<img src={Tabela} alt="Icone de tabela" />
					</li>
					<li className="w-11 flex flex-wrap justify-center h-full items-center">
						<img src={Campo} alt="Icone de campo" />
					</li>
					<li className="w-11 flex flex-wrap justify-center h-full items-center">
						<img src={Player} alt="Icone de player" />
					</li>
				</ul>
			</div>
			<div className="flex">
				<h3>Detalhes / Premier League</h3>
			</div>
			<div className="flex gap-4 mr-4">
				<button className="px-4 py-2 flex items-center bg-white text-preto rounded font-black text-lg font-home">
					Editar
				</button>
				<button className="px-4 py-2 flex items-center border border-white rounded font-black text-lg font-home">
					Excluir
				</button>
			</div>
		</nav>
	);
};
