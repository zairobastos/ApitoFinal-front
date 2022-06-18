import { ListarCadastrar } from "../../components/listarCadastrar";
import { Cards } from "../../components/listarCadastrar/cards";
import { ListarJogadoresTimes } from "../../components/listarJogadoresTimes";
import { Menur } from "../../components/TelasHome/menu";
import { Titulo } from "../../components/TelasHome/titulo";
import RealMadrid from "../../assets/images/RealMadrid.svg";

import { useFormik } from "formik";
import * as Yup from "yup";

export const Times = () => {
	const cadastrarTimes = Yup.object().shape({
		nome: Yup.string()
			.min(3, "O nome deve ter no mínimo 3 caracteres")
			.required("O nome é obrigatório"),
		abreviacao: Yup.string()
			.max(3, "A abreviação deve ter no máximo 3 caracteres")
			.required("A abreviação é obrigatória"),
		escudo: Yup.string().required("O escudo é obrigatório"),
	});
	const formik = useFormik({
		initialValues: {
			nome: "",
			abreviacao: "",
			escudo: "",
		},
		validationSchema: cadastrarTimes,
		onSubmit: (values) => {},
	});

	let [borda, borda1] = "border-borderInput";
	if (formik.errors.nome && formik.values.nome != "") {
		borda = "border-red-500";
	} else if (formik.values.nome != "") {
		borda = "border-green-500";
	}
	if (formik.errors.abreviacao && formik.values.abreviacao != "") {
		borda1 = "border-red-500";
	} else if (formik.values.abreviacao != "") {
		borda1 = "border-green-500";
	}

	return (
		<div>
			<Menur ativo2="ativo" />
			<section className="flex flex-col px-10 mt-32">
				<Titulo
					titulo="Times"
					subtitulo="Lista de suas equipes de futebol cadastrados"
				/>
				<ListarCadastrar>
					<Cards>
						<ListarJogadoresTimes
							foto={RealMadrid}
							nome="Real Madrid"
						/>
						<ListarJogadoresTimes
							foto={RealMadrid}
							nome="Juventus"
						/>
						<ListarJogadoresTimes
							foto={RealMadrid}
							nome="Barcelona"
						/>
						<ListarJogadoresTimes
							foto={RealMadrid}
							nome="Liverpool"
						/>
					</Cards>
					<div className="flex flex-col w-1/4 border-2 border-solid border-borderForm shadow-menu rounded-xl pt-8 px-5">
						<h2 className="font-home font-black text-xl text-navMenuAtivo mb-10">
							Novo Time
						</h2>
						<form
							action="http://localhost:3333/times/cadastrar"
							method="post"
							className="flex flex-col flex-wrap gap-8"
							encType="multipart/form-data"
						>
							<div className="flex flex-col flex-wrap gap-8 w-full">
								<div className="flex flex-col flex-wrap gap-1.5">
									<label
										htmlFor="nome"
										className="text-base font-sans font-semibold leading-4 text-labelLogin"
									>
										Nome
									</label>
									<input
										type="text"
										name="nome"
										id="nome"
										placeholder="Nome"
										required
										onChange={formik.handleChange}
										value={formik.values.nome}
										onBlur={formik.handleBlur}
										className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda}`}
									/>
									{formik.touched.nome &&
									formik.errors.nome ? (
										<p className="text-red-500 font-sans text-sm">
											{formik.errors.nome}
										</p>
									) : null}
								</div>
								<div className="flex flex-col flex-wrap gap-1.5">
									<label
										htmlFor="abreviacao"
										className="text-base font-sans font-semibold leading-4 text-labelLogin"
									>
										Abreviação
									</label>
									<input
										type="text"
										name="abreviacao"
										id="abreviacao"
										placeholder="Abreviação"
										maxLength={3}
										required
										onChange={formik.handleChange}
										value={formik.values.abreviacao}
										onBlur={formik.handleBlur}
										className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda1}`}
									/>
									{formik.touched.abreviacao &&
									formik.errors.abreviacao ? (
										<p className="text-red-500 font-sans text-sm">
											{formik.errors.abreviacao}
										</p>
									) : null}
								</div>
								<div className="flex flex-col flex-wrap gap-1.5">
									<label
										htmlFor="escudo"
										className="text-base font-sans font-semibold leading-4 text-labelLogin"
									>
										Escudo
									</label>
									<input
										type="file"
										name="escudo"
										id="escudo"
										required
										onChange={formik.handleChange}
										value={formik.values.escudo}
										onBlur={formik.handleBlur}
										className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid w-full`}
									/>
								</div>
								<button className="bg-buttonCard rounded text-white font-home font-black text-lg py-2 mb-4">
									Cadastrar Time
								</button>
							</div>
						</form>
					</div>
				</ListarCadastrar>
			</section>
		</div>
	);
};
