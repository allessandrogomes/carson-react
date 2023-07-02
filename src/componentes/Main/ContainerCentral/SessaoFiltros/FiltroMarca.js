import BotaoMarca from "./BotaoMarca/BotaoMarca"
import TituloFiltro from "./TituloFiltro/TituloFiltro"

function FiltroMarca() {
    return (
        <div>
            <TituloFiltro imagem="icone-marca.svg" alt="Ícone marca" tituloFiltro="Marca"/>
            <div className="flex flex-wrap w-56 justify-between text-center">
                <BotaoMarca imagem="icone-chevrolet.svg" nomeMarca="chevrolet"/>
                <BotaoMarca imagem="icone-fiat.svg" nomeMarca="fiat"/>
                <BotaoMarca imagem="icone-ford.svg" nomeMarca="ford"/>
                <BotaoMarca imagem="icone-honda.svg" nomeMarca="honda"/>
                <BotaoMarca imagem="icone-mitsubishi.svg" nomeMarca="mitsubishi"/>
                <BotaoMarca imagem="icone-volkswagen.svg" nomeMarca="volkswagen"/>
                <BotaoMarca imagem="icone-toyota.svg" nomeMarca="toyota"/>
                <BotaoMarca imagem="icone-hyundai.svg" nomeMarca="hyundai"/>
            </div>
            <div className="h-px w-width-300px bg-zinc-300 my-5"></div>
        </div>
    )
}

export default FiltroMarca