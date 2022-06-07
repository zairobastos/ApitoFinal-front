import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "../views/Index";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
