import { Btn } from "../../components/btnPadrao/Index";
import { Chaves } from "../../components/chaves/Index";
import { NomeCampeonato } from "../../components/NomeCampeonato";
import { SubMenu } from "../../components/subMenu";
import { Menur } from "../../components/TelasHome/menu";

{/*const times =[
	{
		nome:'',
		abrev:'',
		escudo: 
	}
]
*/}
export function CampeonatoEmChaves(){
    return(
        <div>
			<Menur ativo1="ativo" />
			<SubMenu ativo1="desativo" ativo4="ativo" />
			<div className="absolute mt-40 px-10 w-full flex flex-col gap-14">
				<NomeCampeonato />
				<main className="flex flex-col gap-7 z-0 ">
					<div>
                       {/*<Chaves/>*/}
                    </div>
                    <div className="flex flex-row gap-4 ml-[45rem]">
                       <Btn link="/" texto="Gerar Partidas" classname="rounded-3xl
							border-black
							text-black
							border-2
							w-56 h-10
							font-bold
							text-lg"
						/>
						<Btn link="/" texto="Sortear Times" classname="rounded-3xl
							border-black
							text-white
							bg-black
							border-2
							w-56 h-10
							font-bold
							text-lg"
						/>
                    </div>
				</main>
			</div>
		</div>
    )
}