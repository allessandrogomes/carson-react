const ListaDeSugestao = ({ listaDeSugestao, veiculoSugeridoClicado }) => {
    return (
        listaDeSugestao.length === 0 ? '' : listaDeSugestao.map(item => {
            return (
                <li 
                    onClick={veiculoSugeridoClicado}
                    key={item.nome} 
                    className="w-10/12 ml-5 bg-white p-3 border border-teal-500 text-teal-500 relative cursor-pointer uppercase">
                    {item.nome}
                </li>
            )
        })
    )
}

export default ListaDeSugestao