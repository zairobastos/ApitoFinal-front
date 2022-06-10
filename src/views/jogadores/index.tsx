import { Menur } from "../../components/TelasHome/menu";
import { Titulo } from "../../components/TelasHome/titulo";

export const Jogadores = () => {
	return (
		<div>
			<Menur ativo3="ativo" />

			<section className="flex flex-col px-10 mt-16 ">
				<Titulo
					titulo="Jogadores"
					subtitulo="Lista de seus jogadores de futebol cadastrados"
				/>
			</section>
		</div>
	);
};
