import { Figure } from "./style";
import Detalhes from "../../assets/images/Vector.svg";
import { Link } from "react-router-dom";

type dados = {
	foto?: string;
	nome: string;
	id?: string;
};

export const ListarTimes = ({ foto, nome, id }: dados) => {
	return (
		<Figure className="flex flex-row flex-wrap justify-between mb-8">
			<figure className="flex items-center">
				<img src={foto} alt="Foto do Jogador" className="h-16 w-16" />
			</figure>
			<div className="flex flex-col justify-between ">
				<h2 className="text-xl font-padrao font-bold text-white text-right">
					{nome}
				</h2>
				<Link to={`/detalhesTime/${id}`}>
					<p className="text-base flex flex-row flex-wrap items-center gap-1 justify-end font-padrao font-semibold text-white text-right">
						Ver Detalhes <img src={Detalhes} alt="" />
					</p>
				</Link>
			</div>
		</Figure>
	);
};
