import React, { FormEvent, useContext, useEffect, useState } from "react";
import { Menur } from "../../components/TelasHome/menu";
import imgAvatar from "../../assets/images/imgGitLet.svg"
import { Plus } from "phosphor-react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { api } from "../../server/api";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";

export const PaginaEditarUsuario = () => {

    const user = useContext(AuthContext);

    const [selectedFile, setSelectedFile] = useState()
    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [imagem, setImagem] = useState("")
    const [senha, setSenha] = useState("")

    useEffect(() => {
		api.get(`/usuario/retornaUsuario/${user.user.id}`)
			.then((res) => {
                setId(res.data.id)
                setNome(res.data.nome)
                setEmail(res.data.email)
                setImagem(res.data.imagem)
                setSenha(res.data.senha)
			})
			.catch((err) => {
				console.log(err);
			});
	}, [user]);

    var teste = false;

    function verificarSenha(){
        useEffect(() => {
            api.get(`/usuario/retornaSenha/${formik.values.floating_currentPass}/${user.user.id}`)
                .then((res) => {
                    console.log("entrei")
                    teste = true;
                })
                .catch((err) => {
                    console.log(err);
                });
        }, []);
    }

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
    }

    function uploadFile(){
        document.getElementById('selectedFile')?.click()
    }

    const SingupSchema = Yup.object().shape({
        floating_email: Yup.string()
            .email('Email inválido'),
		password: Yup.string()
			.min(6, "A senha deve ter no mínimo 6 caracteres")
			.required("A senha é obrigatória"),
		senha: Yup.string()
			.oneOf([Yup.ref("password"), null], "As senhas não conferem")
			.required("A confirmação de senha é obrigatória"),
	});

    const formik = useFormik({
		initialValues: {
			floating_name: "",
            floating_email: "",
            selectedFile: "",
            floating_currentPass: "",
			password: "",
			senha: "",
		},
		validationSchema: SingupSchema,
		onSubmit: (values) => {},
	});
    let [cor, cor1, cor2, cor3,] = "dark:";

	if (formik.errors.password && formik.values.password != "") {
		cor = "text-black";
	} else if (formik.values.password != "") {
		cor1 = "text-red-600";
	}
	if (formik.errors.senha && formik.values.senha != "") {
		cor2 = "text-black";
	} else if (formik.values.senha != "") {
		cor3 = "text-red-600";
	}
    const [loading, setLoading] = useState(false);

	function handleSubmitAtualizaNomeEmail(e: FormEvent) {
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
        var nomei = ''
        if(formik.values.floating_name != ""){
            nomei = formik.values.floating_name;   
        }else{
            nomei = nome;
        }
        var imagemi = ''
        if(formik.values.selectedFile != ""){
            imagemi = formik.values.selectedFile;
        }else{
            imagemi = imagem;
        }
        var emaili = ''
        if(formik.values.floating_email != ""){
            emaili = formik.values.floating_email;
        }else{
            emaili = email;
        }
		setTimeout(() => {
			api.post("/usuario/atualizar", {
                id: id,
				nome: nomei,
				email: emaili,
                senha: senha,
                imagem: imagemi,
			})
				.then((res) => {
					Toast.fire({
						icon: "success",
						title: `${res.data.message}`,
					});
					setTimeout(() => {
						window.location.href = "/editarUsuario";
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

    function handleSubmitAtualizaSenha(e: FormEvent) {
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
        var senhai = ''
        if(formik.values.senha != ""){
            senhai = formik.values.senha
        }else{
            senhai = senha;
        }
        if(teste == true){
        setTimeout(() => {
            api.post("/usuario/atualizar", {
                id: id,
                nome: nome,
                email: email,
                imagem: imagem,
                senha: senhai,
            })
                .then((res) => {
                    Toast.fire({
                        icon: "success",
                        title: `${res.data.message}`,
                    });
                    setTimeout(() => {
                        window.location.href = "/editarUsuario";
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
        }else{
            alert("Senha atual errada");
        }
    }

    return(
        <div>
            <Menur ativo="ativo" />
            <section
                className="py-[7.938rem]
                flex flex-row
                pl-[19.438rem]
                gap-6"
            >
                <div 
                    className="
                    h-[28.813rem] w-[26.188rem]
                    border-2
                    border-inherit
                    rounded-xl
                    shadow-lg
                    font-padrao
                    p-10
                    flex flex-col"
                >
                    <h2
                        className="text-xl
                        font-bold"
                    >
                        Editar Perfil
                    </h2>

                    <form 
                        onSubmit={handleSubmitAtualizaNomeEmail}
                        method="post"
                        className="
                        flex
                        flex-col
                        gap-2
                        
                        "
                    >

                        <img className="scale-50 mt-[-5rem] rounded-full w-[19.9rem] h-[19.1rem]" src={imagem} alt="imagemUser" />
                        
                        <div className="ml-52 mt-[-7.7rem] z-10">
                            <button
                                className="
                                w-11 h-11
                                bg-verde-claro
                                rounded-full
                                pl-2"
                                onClick={uploadFile.bind(this)}
                            >
                                <Plus size={28} color="#fcfcfc" />
                            </button>
                            <input id="selectedFile" name="image" type="file" style={{display:"none"}} accept="image/png, image/jpg"
                                onChange={onSelectFile}
                            />

                        </div>

                        

                        <div className="flex flex-col gap-0">

                            <div className="relative z-0 w-full mb-6 group">
                                <input 
                                    type="text" 
                                    name="floating_name"
                                    id="floating_name" 
                                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer `}
                                    placeholder=" "  
                                    onChange={formik.handleChange}
                                    value={formik.values.floating_name}
                                    onBlur={formik.handleBlur}/>
                                <label 
                                    htmlFor="floating_name" 
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        {nome}
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input 
                                    type="text" 
                                    name="floating_email" 
                                    id="floating_email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer" 
                                    onChange={formik.handleChange}
                                    value={formik.values.floating_email}
                                    onBlur={formik.handleBlur}
                                    placeholder=" " 
                                    />
                                <label 
                                    htmlFor="floating_email" 
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        {email}
                                </label>
                            </div>

                        </div>

                        <button
                            className={`w-full bg-verde-claro text-white text-xl font-bold py-1 rounded-md `}
                            type="submit"
                        >
                            Editar
                        </button>
                    </form>
                </div>

                <div 
                    className="
                    h-[23.438rem] w-[24.5rem]
                    border-2
                    border-inherit
                    rounded-xl
                    shadow-lg
                    font-padrao
                    p-10
                    flex flex-col"
                >

                    <h2
                        className="text-xl
                        font-bold"
                    >
                        Alterar Senha
                    </h2>
                    <form
                        onSubmit={handleSubmitAtualizaSenha}
                        method="post"
                        className="
                        flex
                        flex-col
                        gap-2
                        
                        "
                    >
                        <div className="mt-4 group">
                            
                            <div className="relative z-0 w-full mb-6 group">
                                        <input 
                                            type="password" 
                                            name="floating_currentPass" 
                                            id="floating_currentPass"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer" placeholder=" "
                                            required 
                                            onChange={formik.handleChange}
                                            value={formik.values.floating_currentPass}
                                            onBlur={formik.handleBlur}
                                            />
                                        <label 
                                            htmlFor="floating_currentPass" 
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            id="senha">
                                                Digite sua senha atual
                                        </label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                        <input 
                                            type="text" 
                                            name="password" 
                                            id="password"
                                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none ${cor} dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer`}
                                            placeholder=" " 
                                            required
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            onBlur={formik.handleBlur}
                                            minLength={6} 
                                            onClick={verificarSenha}/>
                                        <label 
                                            htmlFor="floating_email" 
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Digite sua nova senha
                                        </label>
                                        {formik.touched.password && formik.errors.password ? (
                                            <p className="text-red-500 font-padrao text-base">
                                                {formik.errors.password}
                                            </p>
                                        ) : null}
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                        <input 
                                            type="text" 
                                            name="senha" 
                                            id="senha"
                                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none ${cor} dark:border-gray-600 dark:focus:border-verde-claro focus:outline-none focus:ring-0 focus:border-verde-claro peer`} 
                                            placeholder=" " 
                                            required 
                                            onChange={formik.handleChange}
                                            value={formik.values.senha}
                                            onBlur={formik.handleBlur}
                                            minLength={6}/>
                                        <label 
                                            htmlFor="floating_email" 
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeborder-verde-claro peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Confirme sua nova senha
                                        </label>
                                        {formik.touched.senha && formik.errors.senha ? (
                                            <p className="text-red-500 font-padrao text-base">
                                                {formik.errors.senha}
                                            </p>
                                        ) : null}
                            </div>

                            <button
                                className="w-full bg-verde-claro text-white text-xl font-bold py-1 rounded-md"
                                type="submit"
                            >
                                Alterar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}