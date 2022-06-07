import logoImage from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export function BarraMenuInicial() {
	return (
		<header>
			<nav className="container flex items-center py-2 mt-2 sm:mt-8">
				<div className="py-1">
					<Link to={'/'}>
						<img src={logoImage}></img>
          </Link>
				</div>
				<ul className="hidden sm:flex flex-1 justify-end items-center gap-12 font-padrao text-menu uppercase">
					<li className=" cursor-pointer hover:text-gray-600 ">
						<Link to={'/home'}>
              Inicio
            </Link>
					</li>
					<li className=" cursor-pointer hover:text-gray-600">
						<Link to={'/apitofinal'}>
              Apito Final
            </Link>
					</li>
					<li className=" cursor-pointer hover:text-gray-600">
						<a href="#">Sobre</a>
					</li>
					<li className=" cursor-pointer hover:text-gray-600">
						<a href="#">Cadastre-se</a>
					</li>
					<li className=" cursor-pointer hover:text-gray-600">
						<a href="#">Entrar</a>
					</li>
				</ul>
				<div className="flex sm:hidden flex-1 justify-end">
					<i className="text-2xl fa-solid fa-bars"></i>
				</div>
			</nav>
		</header>
	);
}
