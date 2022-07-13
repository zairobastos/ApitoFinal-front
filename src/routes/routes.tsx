import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ApitoFinal } from "../views/ApitoFinal";
import { Cadastrar } from "../views/cadastrar";
import { Campeonatos } from "../views/campeonatos";
import { PaginaInicial } from "../views/home/index";
import { Home } from "../views/Home";
import { Index } from "../views/Index";
import { Jogadores } from "../views/jogadores";
import { Login } from "../views/login";
import { Times } from "../views/times";
import { RecuperarSenha } from "../views/recuperarSenha";
import { PaginaEditarUsuario } from "../views/editarUsuario/Index";
import { DetalhesCampeonato } from "../views/detalhesCampeonato";
import { Tabela } from "../views/tabela";
import { PartidasCampeonato } from "../views/partidasCampeonato";
import { CampeonatoEmChaves } from "../views/chavesCampeonato/Index";
import { EditarCampeonato } from "../views/editarCampeonato/Index";

import { ContextProvider } from "../context/Context";
import { Context } from "../context/Context";
import { useContext } from "react";
import { Error } from "../views/error";

const Router = () => {
	const { isLogin } = useContext(Context);
	return (
		<ContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Index />}>
						<Route path="home" element={<Home />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/cadastrar" element={<Cadastrar />} />
					<Route path="/error" element={<Error />} />
					{isLogin ? (
						<>
							<Route
								path="/paginaInicial"
								element={<PaginaInicial />}
							/>
							<Route
								path="/campeonato"
								element={<Campeonatos />}
							/>
							<Route path="/times" element={<Times />} />
							<Route path="/jogadores" element={<Jogadores />} />
							<Route
								path="/recuperarSenha"
								element={<RecuperarSenha />}
							/>
							<Route
								path="/editarUsuario"
								element={<PaginaEditarUsuario />}
							/>
							<Route
								path="/detalhesCampeonato/:id"
								element={<DetalhesCampeonato />}
							/>
							<Route
								path="/tabelaCampeonato"
								element={<Tabela />}
							></Route>
							<Route
								path="/chavesCampeonato"
								element={<CampeonatoEmChaves />}
							></Route>
							<Route
								path="/partidasCampeonato"
								element={<PartidasCampeonato />}
							/>
							<Route
								path="/editarCampeonato"
								element={<EditarCampeonato />}
							></Route>
						</>
					) : (
						<Route
							path="*"
							element={<Navigate to="/error" replace />}
						></Route>
					)}
				</Routes>
			</BrowserRouter>
		</ContextProvider>
	);
};

export default Router;
