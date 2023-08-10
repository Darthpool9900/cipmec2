import {Button} from './Buttons/Button'
import {Check} from 'phosphor-react'

interface Infos{
  title:string,
  price:number,
  sub:string,
  benefit:string[],
  rec:boolean,
}

function Card({title,sub,price,benefit,rec}:Infos){
    return(
        <>
      <div  className=" bg-gray-600 text-xl flex items-start  h-full w-80 mx-8 rounded-tr-lg rounded-bl-lg rounded-tl-3xl  rounded-br-3xl flex-col p-4">
      {
          rec && <div className="translate-y-[-42px] translate-x-1/2 absolute">
            <span className="bg-violet-600 roundend text-white font-bold px-2 py-2">Recomendado</span>
            </div>
        }
       <h1 className="text-gray-100 text-4xl">{title}</h1>
      <p className="text-gray-100 text-3xl">R${price}</p>
      <p className="text-gray-100 text-base">{sub}</p>
      <Button/>
      <ul className="h-auto border-t-gray-400">
      {benefit.map((item, index) => (
          <li className="text-gray-100 text-base flex items-center m-2" key={index}><Check/>{item}</li>
        ))}
      </ul>
      </div>
    </>
    )
}

export default Card;