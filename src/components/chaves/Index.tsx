import { ItemTime } from "./itemTime/Index";
import img from "../../assets/images/football 1.svg"

interface times{
    times:object
}

export function Chaves(props:times) {
    return(
        <div className="flex flex-col gap-3 w-72 h-40 p-4">
            <ItemTime img={img} nomeTime={"Time1"} />
            <ItemTime img={img} nomeTime={"Time2"} />
        </div>
    )
}