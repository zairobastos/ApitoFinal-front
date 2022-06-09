import { Inputs } from "../input";

export const Input = () => {
	return (
		<>
			<Inputs
				id="email"
				label="Email"
				placeholder="@email.com"
				type="email"
				mb="mb-7"
			/>
			<Inputs
				id="senha"
				label="Senha"
				placeholder="Senha"
				type="password"
			/>
		</>
	);
};
