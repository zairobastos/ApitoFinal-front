import logoImage from '/src/assets/images/logo.svg'
import Style from './styleBarraMenuInicial.css'

export function BarraMenuInicial(){
    return(
      <header>
        <nav className='container flex items-center py-2 mt-2 sm:mt-8'>
           <div className='py-1'><img src='./src/assets/images/logo.svg'></img></div>
           <ul className='hidden sm:flex flex-1 justify-end items-center gap-12 font-menu-inicial text-menu uppercase'>
             <li className=' cursor-pointer hover:text-gray-600 '><a href="#">Inicio</a></li>
             <li className=' cursor-pointer hover:text-gray-600'><a href="#">Apito Final</a></li>
             <li className=' cursor-pointer hover:text-gray-600'><a href="#">Sobre</a></li>
             <li className=' cursor-pointer hover:text-gray-600'><a href="#">Cadastre-se</a></li>
             <li className=' cursor-pointer hover:text-gray-600'><a href="#">Entrar</a></li>
           </ul>
           <div className="flex sm:hidden flex-1 justify-end"><i className="text-2xl fa-solid fa-bars"></i></div>
        </nav>
      </header>

    )
}

/*<nav className='bg-white h-13 flex items-center justify-between flex-wrap p-4 relative'>
           <div className='flex items-center mr-6'>
                <a href="#"><img className='w-104.43 h-102.3 px-[45.36px] py-[8.23px] ' src={logoImage}></img></a>
           </div>
           <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto pl-[25.424rem]'>
            <div className='text-sm lg:flex-grow pr-[7.476rem] space-x-10'>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 font-menu-inicial text-menu hover:text-gray-500 mr-4">
                        Inicio
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 font-menu-inicial text-menu hover:text-gray-500 mr-4">
                        Apito Final
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 font-menu-inicial text-menu hover:text-gray-500 mr-4">
                        Sobre
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 font-menu-inicial text-menu hover:text-gray-500 mr-4">
                        Cadastre-se
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 font-menu-inicial text-menu hover:text-gray-500 mr-4">
                        Entrar
                </a>
            </div>
    </div>
       </nav>*/