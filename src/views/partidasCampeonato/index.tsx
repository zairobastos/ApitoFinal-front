import { NomeCampeonato } from "../../components/NomeCampeonato";
import { SubMenu } from "../../components/subMenu";
import { Menur } from "../../components/TelasHome/menu";

export const PartidasCampeonato = () => {
	return (
		<div>
			<Menur ativo1="ativo" />
			<SubMenu ativo2="ativo" />
			<div className="absolute mt-40 px-10 w-full flex flex-col gap-14">
				<NomeCampeonato />
			</div>
		</div>
	);
};
