interface CardProjectProps{
    projetoNome: string,
    imgProject: string,
    children: React.ReactNode,
    tipo: number
}


function checarTipo(tipo: number){
    switch (tipo){
        case 1:
            return "bg-verdePrimario"
        case 2:
            return "bg-amareloPrimario"
        case 3:
            return "bg-laranjaPrimario"
    }
}

export const CardProject = (props:CardProjectProps) => {
  return (
    <div className="w-full h-48 bg-gray-200 rounded-xl">
        <div className={`rounded-t-xl flex justify-between items-center px-2 py-2 ${checarTipo(props.tipo)}`} id="headerCard">
            <div className="w-12 h-12 rounded-full" id="projetoImg"><img className="w-full rounded-full" src={props.imgProject} alt={props.projetoNome} /></div>
            <h2 className="font-medium uppercase"> {props.projetoNome} </h2>
        </div>
        <div className="p-2 h-28 overflow-hidden">
            <p>{props.children}</p>
        </div>
    </div>
  )
}
