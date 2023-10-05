import { useState } from "react"
import ListaDeSugestao from "./ListaDeSugestao"


const PesquisaDeVeiculos = ({ listaDeSugestao, aoPesquisarVeiculo, veiculoSugeridoClicado, aoPesquisarLupa, opacidadeNavLi }) => {

    const [valorInputPesquisa, setValorInputPesquisa] = useState('')
    const [ocultarListaDeSugestao, setOcultarListaDeSugestao] = useState(false)

    const aoDigitarInput = (e) => {
        aoPesquisarVeiculo(e)
        setValorInputPesquisa(e.target.value)
        setOcultarListaDeSugestao(false)
    }

    const aoClicarNaLupa = (e) => {
        aoPesquisarLupa(e)
        limparPesquisa()
    }

    const aoClicarNaSugestao = (e) => {
        veiculoSugeridoClicado(e)
        limparPesquisa()
    }

    const limparPesquisa = () => {
        setValorInputPesquisa('')
        setOcultarListaDeSugestao(true)
    }

    return (
        <div className={`navListLi ${opacidadeNavLi} w-1/2 items-center h-12 transition`} id="divInputDePesquisa">
            <div className="flex items-center ">
                <input
                    value={valorInputPesquisa}
                    onChange={aoDigitarInput}
                    className="w-full h-12 rounded-full p-4 font-archivo text-sm outline-none"
                    placeholder="Digite um modelo ou marca..." type="text" style={{ backgroundPositionX: '95%' }}
                    id="barraDePesquisa"
                />

                <a onClick={aoClicarNaLupa} href="#" className="text-gray-600 hover:text-gray-800 relative right-7">
                    <img className="bg-white" src="./imagens/Cabecalho/lupa.svg" alt="Imagem de Lupa de pesquisa"
                        id="lupaDePesquisa" />
                </a>
            </div>
            <ul className={`${ocultarListaDeSugestao ? 'hidden' : ''} overflow-y-auto left-[5%] relative w-4/5 max-h-[304px]`} id="listaDeSugestao">
                <ListaDeSugestao 
                    veiculoSugeridoClicado={aoClicarNaSugestao} 
                    listaDeSugestao={listaDeSugestao} 
                />
            </ul>
        </div>
    )
}

export default PesquisaDeVeiculos