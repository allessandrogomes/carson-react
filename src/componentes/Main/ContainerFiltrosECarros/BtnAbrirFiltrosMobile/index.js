const BtnAbrirFiltrosMobile = ({ abrirFiltros, classeAtivo }) => {
    return (
        <button onClick={abrirFiltros} id="btnAbrirFiltrosMobile" className={`${classeAtivo} hidden cursor-pointer`}>Filtros</button>
    )
}

export default BtnAbrirFiltrosMobile