import ListaDeSugestao from "./ListaDeSugestao"

const PesquisaDeVeiculos = ({ listaDeSugestao, aoPesquisarVeiculo, veiculoSugeridoClicado, aoPesquisarLupa }) => {
    return (
        <div className="navListLi w-1/2 items-center h-12" id="divInputDePesquisa">
            <div className="flex items-center ">
                <input
                    onChange={aoPesquisarVeiculo}
                    className="w-full h-12 rounded-full p-4 font-archivo text-sm outline-none"
                    placeholder="Digite um modelo ou marca..." type="text" style={{ backgroundPositionX: '95%'}}
                    id="barraDePesquisa"
                />

                <a onClick={aoPesquisarLupa} href="#" className="text-gray-600 hover:text-gray-800 relative right-7">
                    <img className="bg-white" src="./imagens/Cabecalho/lupa.svg" alt="Imagem de Lupa de pesquisa"
                        id="lupaDePesquisa" />
                </a>
            </div>
            <ul id="listaDeSugestao">
                <ListaDeSugestao veiculoSugeridoClicado={veiculoSugeridoClicado} listaDeSugestao={listaDeSugestao}/>
            </ul>
        </div>
    )
}

export default PesquisaDeVeiculos