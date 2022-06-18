import { LoginContainer } from "./style";
import HeaderLogo from "../../components/login/logo";
import { FooterImg } from "../../components/login/footer";
import { HeaderForm } from "../../components/login/headerForm";
import { Inputi } from "../../components/login/form/style";

import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const Login = () => {
	const SinginSchema = Yup.object().shape({
		email: Yup.string()
			.email("Insira um e-mail válido")
			.required("O e-mail é obrigatório"),
		password: Yup.string()
			.min(6, "A senha deve ter no mínimo 6 caracteres")
			.required("A senha é obrigatória"),
	});
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: SinginSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});
	let borda = "border-borderInput";
	if (formik.errors.email && formik.values.email != "") {
		borda = "border-red-500";
	} else if (formik.values.email != "") {
		borda = "border-green-500";
	}
	let borda2 = "border-borderInput";
	let border3 = "border-borderInput";
	if (formik.errors.password && formik.values.password != "") {
		borda2 = "border-red-500";
		border3 = "border-red-500";
	} else if (formik.values.password != "") {
		borda2 = "border-green-500";
		border3 = "border-green-500";
	}
	const [tipo, setTipo] = useState("password");
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
		setTipo(show ? "password" : "text");
	};
	return (
		<LoginContainer className="flex flex-row">
			<section className="flex flex-col px-8 w-1/2 items-start">
				<Link to={"/"}>
					<HeaderLogo />
				</Link>
				<form
					action=""
					onSubmit={formik.handleSubmit}
					method="post"
					className="flex flex-col w-full"
				>
					<HeaderForm
						title="Bem-vindo ao Apito Final"
						subtitle="Faça o login para acessar sua conta."
					/>
					<div className="flex flex-col flex-wrap gap-1.5">
						<label
							htmlFor="email"
							className="text-base font-sans font-semibold leading-4 text-labelLogin"
						>
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="@email.com"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda}`}
						/>
						<p>
							{formik.errors.email && formik.touched.email ? (
								<span className="text-red-500 text-base font-sans">
									{formik.errors.email}
								</span>
							) : null}
						</p>
					</div>
					<div className="flex flex-col flex-wrap gap-1.5 mt-5">
						<label
							htmlFor="password"
							className="text-base font-sans font-semibold leading-4 text-labelLogin"
						>
							Senha
						</label>
						<div>
							<Inputi className="flex flex-wrap items-center">
								<input
									type={tipo}
									name="password"
									id="password"
									placeholder="Senha"
									value={formik.values.password}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda2}`}
								/>
								{show ? (
									<AiFillEye
										className={`h-13 w-8 bg-input olho border-solid border-inputBorder ${border3}`}
										onClick={handleClick}
									/>
								) : (
									<AiFillEyeInvisible
										className={`h-13 w-8 bg-input olho border-solid border-inputBorder ${border3}`}
										onClick={handleClick}
									/>
								)}
							</Inputi>
							<p>
								{formik.errors.password &&
								formik.touched.password ? (
									<span className="text-red-500 text-base font-sans">
										{formik.errors.password}
									</span>
								) : null}
							</p>
						</div>
					</div>
					<Link
						to={"/recuperarSenha"}
						className="text-verde-claro font-sans font-semibold text-right mt-7 text-base"
					>
						Esqueceu a senha?
					</Link>
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
