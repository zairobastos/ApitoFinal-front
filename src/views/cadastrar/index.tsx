import { Link } from "react-router-dom";
import { FooterImg } from "../../components/login/footer";
import HeaderLogo from "../../components/login/logo";
import { HeaderForm } from "../../components/login/headerForm";
import { Input } from "../../components/login/form";
import { CadContainer } from "./style";
import { Inputs } from "../../components/login/input";

export const Cadastrar = () => {
	return (
		<CadContainer>
			<section className="flex flex-col px-8 w-1/2 items-start">
				<Link to={"/"}>
					<HeaderLogo />
				</Link>
				<form
					action="http://localhost:3333/usuario/cadastrar"
					method="post"
					className="flex flex-col w-full"
				>
					<HeaderForm
						title="Cadastre-se no Apito Final"
						subtitle="Faça sua conta para acessar o Apito Final."
					/>
					<Inputs
						id="nome"
						label="Nome"
						placeholder="Nome"
						type="text"
						mb="mb-7"
					/>
					<Input />
					<Inputs
						id="confirmarSenha"
						label="Confirmar Senha"
						placeholder="Senha"
						type="password"
						mb="mt-7"
					/>
					<button className="bg-verde-claro text-white mt-6 mb-3 rounded-inputLogin py-2.5 text-base font-sans font-semibold ">
						Cadastre-se
					</button>
				</form>
			</section>
			<FooterImg />
		</CadContainer>
	);
};
