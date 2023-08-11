const TituloFiltro = (props) => {
    return (
        <div className="flex pb-4">
            <img className="mr-2" src={`./imagens/Filtros/${props.imagem}`} alt={props.alt} />
            <h4 className="font-archivo text-lg text-color1">{props.tituloFiltro}</h4>
        </div>
    )
}

export default TituloFiltro