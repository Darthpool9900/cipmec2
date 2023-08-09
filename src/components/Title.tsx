import { ArrowRight } from "phosphor-react";

interface Text{
    word:string
}

export const Title = ({word}:Text)=>{
    return(
        <h1 className="text-lg text-gray-100 flex items-center h-auto font-bold">{word}<ArrowRight/></h1>
    )
}