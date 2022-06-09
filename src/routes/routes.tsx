import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApitoFinal } from "../views/ApitoFinal";
import { Home } from "../views/Home";
import { Index } from "../views/Index";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index />}>
					<Route path="home" element={<Home />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/cadastrar" element={<Cadastrar />} />
				<Route path="/paginaInicial" element={<PaginaInicial />} />
				<Route path="/campeonato" element={<Campeonatos />} />
				<Route path="/times" element={<Times />} />
				<Route path="/jogadores" element={<Jogadores />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
