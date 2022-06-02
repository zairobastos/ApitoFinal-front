import { BarraMenuInicial } from "../components/barraMenuInicial/BarraMenuInicial";


export function Index(){
    return(
        <div className="w-padrao_tela h-padrao_tela">
            <header>
                <BarraMenuInicial />
            </header>
            <body>
                <div className=" items-start w-full h-full fixed">
                    <img className="object-fill ml-60 relative pt-0" src="./src/assets/images/jogador-1.svg" />   
                </div>
            </body>
            <footer>

            </footer>
        </div>    
    )
}