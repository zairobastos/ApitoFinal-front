import { useFormik } from "formik";
import { Inputs } from "../login/input";
import * as Yup from "yup";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import { api } from "../../server/api";
import { CircleNotch } from "phosphor-react";

export const FormCampeonato = () => {
	const SingupSchema = Yup.object().shape({
		nome: Yup.string()
			.min(3, "O nome deve ter no mínimo 3 caracteres")
			.required("O nome é obrigatório"),
		premiacao: Yup.string().required("A premiaçao é obrigatória"),
		dataInicio: Yup.string().required(
			"A data de inicio do campeonato é obrigatória"
		),
		dataFim: Yup.string().required(
			"A data de final do campeonato é obrigatória"
		),
	});
	const formik = useFormik({
		initialValues: {
			nome: "",
			premiacao: "",
			dataInicio: "",
			dataFim: "",
		},
		validationSchema: SingupSchema,
		onSubmit: (values) => {},
	});
	let disable = "bg-buttonCard";
	const isDisableButton = () => {
		if (
			formik.values.nome == "" ||
			formik.values.premiacao == "" ||
			formik.values.dataInicio == "" ||
			formik.values.dataFim == "" ||
			!formik.isValid
		) {
			disable = "bg-buttonCard";
			return true;
		} else {
			disable = "bg-verde-claro";
			return false;
		}
	};

	const [loading, setLoading] = useState(false);

	function handleSubmitCadastro(e: FormEvent) {
		e.preventDefault();
		setLoading(true);
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener("mouseenter", Swal.stopTimer);
				toast.addEventListener("mouseleave", Swal.resumeTimer);
			},
		});
		setTimeout(() => {
			api.post("/campeonato/criarCampeonato", {
				nome: formik.values.nome,
				premiacao: formik.values.premiacao,
				dataInicio: formik.values.dataInicio,
				dataFim: formik.values.dataFim,
			})
				.then((res) => {
					Toast.fire({
						icon: "success",
						title: `${res.data.message}`,
					});
					setTimeout(() => {
						window.location.href = "/login";
					}, 3000);
				})
				.catch((err) => {
					Toast.fire({
						icon: "error",
						title: `${err.response.data.message}`,
					});
				});
			setLoading(false);
		}, 2000);
	}

	return (
		<aside className="flex h-full flex-col w-1/4 border-2 border-solid border-borderForm shadow-menu rounded-xl pt-8 px-5">
			<form onSubmit={handleSubmitCadastro} method="POST">
				<h2 className="font-home font-black text-xl text-navMenuAtivo mb-10">
					Novo Campeonato
				</h2>
				<div className="flex flex-col flex-wrap gap-8">
					<Inputs
						label="Nome"
						name="nome"
						id="nome"
						placeholder="Nome do Campeonato"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.nome}
						onBlur={formik.handleBlur}
						required
					/>
					<Inputs
						label="Premiação"
						id="premiacao"
						placeholder="Premiação"
						name="premiacao"
						type="number"
						onChange={formik.handleChange}
						value={formik.values.premiacao}
						onBlur={formik.handleBlur}
						required
					/>
					<Inputs
						label="Data de Início"
						id="dataInicio"
						name="dataInicio"
						placeholder="Data de Início"
						type="date"
						onChange={formik.handleChange}
						value={formik.values.dataInicio}
						onBlur={formik.handleBlur}
						required
					/>
					<Inputs
						label="Data de Término"
						id="dataTermino"
						name="dataTermino"
						placeholder="Data de Término"
						type="date"
						onChange={formik.handleChange}
						value={formik.values.dataFim}
						onBlur={formik.handleBlur}
						required
					/>
					<button
						type="submit"
						disabled={isDisableButton()}
						className={`bg-buttonCard rounded text-white font-home font-black text-lg py-2 mb-4 ${disable}`}
					>
						{loading ? (
							<div className="h-6 flex justify-center items-center">
								<CircleNotch
									size={30}
									className="animate-spin"
								/>
							</div>
						) : (
							"Cadastrar Campeonato"
						)}
					</button>
				</div>
			</form>
		</aside>
	);
};
