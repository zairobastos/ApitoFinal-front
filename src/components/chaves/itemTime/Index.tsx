import { useState, useContext, useEffect } from "react"
import imgAlt from "../../../assets/images/football 1.svg"
import { AuthContext } from "../../../context/Auth/AuthContext"
import { api } from "../../../server/api"

interface times{
    array:never[]
    areTeamsVisible:boolean
}

export const ItemTime = (props:times) =>{

    const condicional= (isActive: boolean,  time:any)=> {
       
        const active = isActive
        if(active){
            return <>
                <div className="flex flex-row
                gap-3
                border-2 rounded-full border-verde-claro 
                p-1
                pl-2
                font-padrao
                text-black text-2xl
                font-normal
                items-center
                w-full
                h-10">
                    <img className="rounded-full h-5/6" src={time.escudo} />
                    {time.nome}
            </div>
            </>
             
        } 
        if(!active){
            return <>
                 <div className="flex flex-row
                gap-3
                border-2 rounded-full border-verde-claro 
                p-1
                pl-2
                font-padrao
                text-black text-2xl
                font-normal
                items-center
                w-full
                h-10">
                    <img className="rounded-full h-5/6" src={imgAlt} />
            </div>
            </>
        }
    }

    return(
       <>
       
        {props.array.map((time:any) => {
            return condicional(props.areTeamsVisible, time)
        })}
       </>
                
    )
}