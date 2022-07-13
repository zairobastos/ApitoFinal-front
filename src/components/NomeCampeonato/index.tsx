import Calendario from "../../assets/images/calendar.svg";
import moment from "moment";
interface Dados {
	logo?: string;
	nome?: string;
	dataInicio?: string;
	dataFim?: string;
}

export const NomeCampeonato = ({ logo, nome, dataInicio, dataFim }: Dados) => {
	return (
		<div className="flex h-32">
			<figure className="flex items-center gap-2">
				<img src={logo} alt="" width={100} />
				<div className="flex flex-col text-preto justify-between items-center h-full">
					<h1 className="text-6xl font-bold mt-8 font-padrao">
						{nome}
					</h1>
					<figure className="flex gap-8">
						<div className="flex gap-1 items-center">
							<img src={Calendario} alt="Data de Início" />
							<p>{moment(dataInicio).format("DD/MM/YYYY")}</p>
						</div>
						<div className="flex gap-1 items-center">
							<img src={Calendario} alt="Data de Fim" />
							<p>{moment(dataFim).format("DD/MM/YYYY")}</p>
						</div>
					</figure>
				</div>
			</figure>
		</div>
	);
};
