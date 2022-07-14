import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { boolean } from "yup/lib/locale";
import { Btn } from "../../components/btnPadrao/Index";
import { ItemTime } from "../../components/chaves/itemTime/Index";

import { NomeCampeonato } from "../../components/NomeCampeonato";
import { SubMenu } from "../../components/subMenu";
import { Menur } from "../../components/TelasHome/menu";
import { AuthContext } from "../../context/Auth/AuthContext";
import { api } from "../../server/api";



export function CampeonatoEmChaves(){

	const user = useContext(AuthContext);
	const [times, setTimes] = useState([])
	const [timesAux, setTimesAux] = useState([])
	const [stateBtnGerar, setStateBtnGerar] = useState(false)
	const [isGerarPartidas, setIsGerarPartidas] = useState(false)
	const [isSorteado, setIsSorteado] = useState(false)

	useEffect(() => {
		api.get(`/times/buscar/${user.user.id}`)
			.then((res) => {
				setTimes(res.data)
			})
			.catch((err) => {
				console.log(err);
			});
	}, [user]);

	function shuffle (array: any) {
	
		var m = array.length, t, i;
	  
		// While there remain elements to shuffle…
		while (m) {
	  
		  // Pick a remaining element…
		  i = Math.floor(Math.random() * m--);
	  
		  // And swap it with the current element.
		  t = array[m];
		  array[m] = array[i];
		  array[i] = t;
		}
		
		setTimesAux(array)
		setIsSorteado( true)
		return
	  }

	const btnGerar = () => {

		if(stateBtnGerar){
			if(timesAux != null){
				setTimes(timesAux)
				setIsGerarPartidas(true)
			}
			
		}

		return 
	}

	
		
    return(

        <div>
			<Menur ativo1="ativo" />
			<SubMenu ativo1="desativo" ativo4="ativo"  btnEditarAtivo={true} titulo="Campeonato"/>
			<div className="absolute mt-40 px-10 w-full flex flex-col gap-14">
				<main className="flex flex-col gap-7 z-0 ">
					<div className="flex flex-col-reverse gap-1 w-44 ">
						<ItemTime array={times} areTeamsVisible={isGerarPartidas}/>
					</div>
                    <div className="flex flex-row gap-4 ml-[45rem] mb-1">

					<Link to="/chavesCampeonato">
						<button
							className="rounded-3xl
							border-black
							text-black
							border-2
							w-56 h-10
							font-bold
							text-lg"
                			onClick={btnGerar}
                			id={'1'}
							onClickCapture={()=>setStateBtnGerar(true)}
            			>
				            Gerar Partidas
						</button>
					</Link>
                       
					<Link to="/chavesCampeonato">
						<button
							className="rounded-3xl
							border-black
							text-white
							bg-black
							border-2
							w-56 h-10
							font-bold
							text-lg"
                			onClick={() => shuffle(times)}
							disabled = {isSorteado}
            			>
				            Sortear Times
						</button>
					</Link>
						
                    </div>
				</main>
			</div>
		</div>
    )
}