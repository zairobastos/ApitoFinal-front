import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApitoFinal } from "../views/ApitoFinal";
import { Home } from "../views/Home";
import { Index } from "../views/Index";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index />} >
					<Route path="home" element={<Home/>}/>
					<Route path="apitofinal" element={<ApitoFinal/>}/>
				</Route>
				
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
