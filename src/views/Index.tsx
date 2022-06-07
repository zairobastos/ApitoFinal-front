import { ApitoFinal } from "./ApitoFinal";
import { Copyrights } from "./Copyrights";
import { Home } from "./Home";
import { NossaEquipe } from "./NossaEquipe";
import { Servicos } from "./Servicos";
import { Sobre } from "./Sobre";

export function Index() {
	
	return (
		<div className="snap-y snap-mandatory overflow-scroll">
			<div className="snap-start">
				<Home/>
			</div>
			<div className="snap-start">
				<ApitoFinal/>
			</div>
			<div className="snap-start">
				<Servicos />
			</div>
			<div className="snap-start">
				<Sobre />
			</div>
			<div className="snap-start">
				<NossaEquipe/>
			</div>
			<div className="snap-start">
				<Copyrights />
			</div>
		</div>
	);
}
