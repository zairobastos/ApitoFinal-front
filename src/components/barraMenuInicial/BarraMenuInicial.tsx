import logoImage from '/home/leticia/projeto-integrador-3/src/assets/logo.svg'
import Style from './styleBarraMenuInicial.css'

export function BarraMenuInicial(){
    return(
        <div className='bg-white h-52 flex space-x-3 fixed'>
            <img className='w-104.43 h-102.3 px-[65.36px] py-[36.23px]' src={logoImage}></img>
            <div className='flex flex-row space-x-6 px-[489.79px] py-[77.44px] items-center'>
                <a className='w-16  font-menu-inicial text-menu items-center' href="#">Inicio</a>
                <a className=' w-24 font-menu-inicial text-menu' href="#">Apito Final</a>
                <a className=' w-16 font-menu-inicial text-menu' href="#">Sobre</a>
                <a className=' w-28 font-menu-inicial text-menu' href="#">Cadastre-se</a>
                <a className=' w-16 font-menu-inicial text-menu' href="#">Entrar</a>                
            </div>
		</div>
    )
}