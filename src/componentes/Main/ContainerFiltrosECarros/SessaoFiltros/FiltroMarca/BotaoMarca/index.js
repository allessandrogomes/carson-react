const BotaoMarca = (props) => {
    return (
        <div onClick={props.onClick} className="borda border-color2 filtroMarca h-16 flex flex-col w-12 h-12 mb-4 cursor-pointer">
            <img src={`./imagens/Filtros/${props.imagem}`} alt="" />
            <h5 className="text-color1 text-font-10px font-archivo capitalize">{props.nomeMarca}</h5>
        </div>
    )
}

export default BotaoMarca