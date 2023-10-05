const FiltrosAtivos = (props) => {
    return (
        <div className="filtroSessao max-w-90% justify-start flex flex-wrap items-center text-color3 p-6 font-archivo mb-6 rounded-full border bg-color4"
            id="btnFiltroSessao">
            <h3 className="mr-2">Filtros:</h3>
            {props.filtrosAtivos.length == 0 ? '' : props.filtrosAtivos.map(filtroAtivo => {
            const identificaFiltroClicado = () => {
                {props.fecharFiltro(filtroAtivo)}
            }
                return (
                    <div key={filtroAtivo} className="btnFiltroFilho estado flex m-2 justify-between px-2.5 items-center w-32 h-10 bg-white text-center rounded-full shadow-md">
                            <p className="valorFiltro valorFiltroEstado text-xs uppercase">{filtroAtivo}</p>
                            <button onClick={identificaFiltroClicado} className="btnRemoverFiltro">
                                <img src="./imagens/Filtros/btn-remover.svg" alt="" />
                            </button>
                    </div>
                )
            })}
        </div>
    )
}

export default FiltrosAtivos