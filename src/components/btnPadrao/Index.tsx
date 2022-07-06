import { Link } from "react-router-dom"

interface botao{
    link: string,
    texto: string,
    classname: string,
}

export function Btn(props:botao){
    return(
        <Link to={props.link}>
			<button
				className={`
                ${props.classname}`}
                
            >
		            {props.texto}
			</button>
		</Link>
    )
}