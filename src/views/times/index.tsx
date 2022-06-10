import { Menur } from "../../components/TelasHome/menu";
import { Titulo } from "../../components/TelasHome/titulo";

export const Times = () => {
	return (
		<div>
			<Menur ativo2="ativo" />
			<section className="flex flex-col px-10 mt-16">
				<Titulo
					titulo="Times"
					subtitulo="Lista de suas equipes de futebol cadastrados"
				/>
			</section>
		</div>
	);
};
