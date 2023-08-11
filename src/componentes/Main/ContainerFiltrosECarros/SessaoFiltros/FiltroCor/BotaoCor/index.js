const BotaoCor = (props) => {
    return (
        <div onClick={props.onClick} className={`borda filtroCorBtn border-color2 ${props.cor} h-5 w-1/6 mr-7 mb-4 cursor-pointer`}>
            <h5 className="filtroCorBtnValor font-bold  text-color3 capitalize">{props.nomeCor}</h5>
        </div>
    )
}

export default BotaoCor