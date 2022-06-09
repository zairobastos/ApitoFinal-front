import { LoginContainer } from "./style";
import HeaderLogo from "../../components/login/logo";
import { FooterImg } from "../../components/login/footer";
import { HeaderForm } from "../../components/login/headerForm";
import { Input } from "../../components/login/form";
import { Link } from "react-router-dom";
export const Login = () => {
	return (
		<LoginContainer className="flex flex-row">
			<section className="flex flex-col px-8 w-1/2 items-start">
				<Link to={"/"}>
					<HeaderLogo />
				</Link>
				<form action="" method="post" className="flex flex-col w-full">
					<HeaderForm
						title="Bem-vindo ao Apito Final"
						subtitle="Faça o login para acessar sua conta."
					/>
					<Input />
					<p className="text-verde-claro font-sans font-semibold text-right mt-7 text-base">
						Esqueceu a senha?
					</p>
					<button className="bg-verde-claro text-white mt-6 rounded-inputLogin py-2.5 text-base font-sans font-semibold ">
						Entrar
					</button>
					<p className="mt-6 font-sans font-semibold text-base text-labelLogin">
						Ainda não tem uma conta?{" "}
						<Link to={"/cadastrar"} className="text-verde-claro">
							Criar Conta
						</Link>
					</p>
				</form>
			</section>
			<FooterImg />
		</LoginContainer>
	);
};
