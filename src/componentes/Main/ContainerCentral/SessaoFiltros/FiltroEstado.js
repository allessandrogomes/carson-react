import BotaoEstado from "./BotaoEstado/BotaoEstado"
import TituloFiltro from "./TituloFiltro/TituloFiltro"

function FiltroEstado() {

    const estados = ['sp', 'rj', 'mt', 'mg', 'al', 'ba', 'rs', 'ma', 'am', 'to', 'go', 'pi', 'pe', 'ac'] 

    return (
        <div>
            <TituloFiltro imagem="icone-localizacao.svg" alt="Ícone localização do estado" tituloFiltro="Escolha o seu Estado"/>
            <div className="flex flex-wrap w-72">
                <BotaoEstado itens={estados}/>
            </div>
            <div className="h-px w-width-300px bg-zinc-300 my-5"></div>
        </div>
    )
}

export default FiltroEstado