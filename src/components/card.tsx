interface Infos{
  title:string,
  price:number,
  sub:string,
  benefit:string[]
}

function Card({title,sub,price,benefit}:Infos){
    return(
        <>
      <div  className=" bg-gray-600 text-xl flex items-start  h-full w-80 mx-8 rounded-tr-lg rounded-bl-lg rounded-tl-3xl  rounded-br-3xl flex-col p-4">
       <h1 className="text-gray-100 text-4xl">{title}</h1>
      <p className="text-gray-100 text-3xl">R${price}</p>
      <p className="text-gray-100 text-base">{sub}</p>
      <ul className="h-auto">
      {benefit.map((item, index) => (
          <li className="text-gray-100 text-base" key={index}>{item}</li>
        ))}
      </ul>
      </div>
    </>
    )
}

export default Card;