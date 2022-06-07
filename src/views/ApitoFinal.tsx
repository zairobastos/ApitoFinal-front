import React from "react"
import imgWallet from "../assets/images/wallet.svg"
import imgTrophy from "../assets/images/trophy.svg"
import imgCicleGrid from "../assets/images/cicle_grid.svg"
import imgFooterServices from "../assets/images/footerServices.svg"
import { CardServices } from "../components/cardServices/CardServices"

export function ApitoFinal(){

    const cards = [
        {   
            caminho: imgWallet,
            title: 'Gratuito',
            texto: 'Pronto para usar! Você pode começar a usar imediatamente, sem a necessidade de cadastrar dados financeiros.'
        },
        {
            caminho: imgTrophy,
            title: 'Classificação e Ranking',
            texto: 'Tabelas de classificação, artilharia e rankings calculados automaticamente. Crie também votações entre os jogadores.'
        },
        {
            caminho: imgCicleGrid,
            title: 'Aplicação Flexível',
            texto: 'Interface simples e prática para criar campeonatos de categorias e com diferente número de fases e rodadas.'
        },
    ]

    const sr = ScrollReveal({
		distance: "3.75rem",
		duration: 2500,
		delay: 400,
		reset: true,
	});

    sr.reveal("#titulo-sessao", {delay: 300, origin: "top" })

    return(
        <section className="relative w-full h-full lg:h-[41rem] ">
            <div 
                className="
                    flex flex-col flex-start items-center gap-14"
            >
                <span 
                    id="titulo-sessao"
                    className="font-padrao text-verde-claro font-black uppercase 
                        text-4xl lg:text-5xl pt-[8.033rem] lg:pt-[5.033rem]"
                >
                    Apito Final
                </span>

                <div 
                    id="cards"
                    className="flex flex-1 flex-col-reverse lg:flex-row gap-0 lg:gap-20"
                >
                    <CardServices caminho={cards[0].caminho} title={cards[0].title} text={cards[0].texto} />
                    <CardServices caminho={cards[1].caminho} title={cards[1].title} text={cards[1].texto} />
                    <CardServices caminho={cards[2].caminho} title={cards[2].title} text={cards[2].texto} />
                </div>
                
                <img className="" src={imgFooterServices}></img>
                
            </div>

            
               
        </section>
    )
}