function BotaoEstado(props) {

    return (
        props.itens.map(item => {
            return <div key={item}
                        className="borda btnEstado border-color2 flex justify-center items-center text-center mr-1 mb-1 w-9 h-9 cursor-pointer">
                        <h5 className="btnEstadoValor w-full text-zinc-400 uppercase font-archivo">{item}</h5>
                    </div>
        })
    )
}

export default BotaoEstado