import { BarraMenuInicial } from "../components/barraMenuInicial/BarraMenuInicial";


export function Index(){
    return(        
        <section>
            <BarraMenuInicial />
                <section className="relative">
                    <div className="container flex flex-col-reverse lg:flex-row items-center gap-2 mt-14 lg:mt-0">
                        {/**Conteúdo */}
                        <div className="flex flex-1 flex-col items-center lg:items-start z-0 -mt-[-8.25rem] lg:mt-[-10.25rem]">
                            <span className="font-menu-inicial text-3xl md:text-4 lg:text-5xl text-center lg:text-left ">
                                Bem vindo ao <span className="font-black text-verde-claro text-5xl italic">Apito Final</span> !
                            </span>
                            <p className="font-menu-inicial text-2xl text-center lg:text-left mt-4">
                                Gerencie os melhores campeonatos de futebol, times esportivos, e jogadores incríveis sem sair de casa.
                            </p>
                            <div className="flex justify-center flex-wrap gap-6">
                                <button type="button" className="btn-index btn-index-preto hover:bg-verde-claro">Cadastrar</button>
                            </div>
                        </div>   

                        {/**imagem */}
                        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mg-0 z-2">
                            <img className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./src/assets/images/jogador-1.svg" alt="" />
                        </div>
                    </div>
                </section>
        </section>   
    )
}