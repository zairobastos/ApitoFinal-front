import logoImage from '/home/leticia/projeto-integrador-3/src/assets/images/logo.svg'
import Style from './styleBarraMenuInicial.css'

export function BarraMenuInicial(){
    return(
        /**Por fazer: resposividade */
       <nav className='bg-white h-13 flex items-center justify-between flex-wrap p-4 relative'>
           <div className='flex items-center mr-6'>
                <a href="#"><img className='w-104.43 h-102.3 px-[45.36px] py-[10.23px] ' src={logoImage}></img></a>
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
       </nav>

/*
 <div className='bg-white h-52 flex space-x-3 fixed'>
            <img className='w-104.43 h-102.3 px-[75.36px] py-[50.23px]' src={logoImage}></img>
            
            <div className='flex flex-row space-x-6 px-[489.79px] py-[27.44px] items-center'>
                <a className='w-16  font-menu-inicial text-menu items-center hover:' href="#">Inicio</a>
                <a className=' w-24 font-menu-inicial text-menu items-center' href="#">Apito Final</a>
                <a className=' w-16 font-menu-inicial text-menu items-center' href="#">Sobre</a>
                <a className=' w-28 font-menu-inicial text-menu items-center' href="#">Cadastre-se</a>
                <a className=' w-16 font-menu-inicial text-menu items-center' href="#">Entrar</a>                
            </div>
            

            
		</div>

<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
<div class="flex items-center flex-shrink-0 text-white mr-6">
  <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
  <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
</div>
<div class="block lg:hidden">
  <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
  </button>
</div>
<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
  <div class="text-sm lg:flex-grow">
    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
      Docs
    </a>
    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
      Examples
    </a>
    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
      Blog
    </a>
  </div>
  <div>
    <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
  </div>
</div>
</nav>*/
    )
}