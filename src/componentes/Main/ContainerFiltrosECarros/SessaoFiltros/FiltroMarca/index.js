import BotaoMarca from "./BotaoMarca"
import TituloFiltro from "../TituloFiltro"

const FiltroMarca = (props) => {
    return (
        <div>
            <TituloFiltro imagem="icone-marca.svg" alt="Ícone marca" tituloFiltro="Marca"/>
            <div className="flex flex-wrap w-56 justify-between text-center">
                <BotaoMarca onClick={props.onClick} imagem="icone-chevrolet.svg" nomeMarca="chevrolet"/>
                <BotaoMarca onClick={props.onClick} imagem="icone-fiat.svg" nomeMarca="fiat"/>
                <BotaoMarca onClick={props.onClick} imagem="icone-ford.svg" nomeMarca="ford"/>
                <BotaoMarca onClick={props.onClick} imagem="icone-honda.svg" nomeMarca="honda"/>
                <BotaoMarca onClick={props.onClick} imagem="icone-mitsubishi.svg" nomeMarca="mitsubishi"/>
                <BotaoMarca onClick={props.onClick} imagem="icone-volkswagen.svg" nomeMarca="volkswagem"/>
                <BotaoMarca onClick={props.onClick} imagem="icone-toyota.svg" nomeMarca="toyota"/>
                <BotaoMarca onClick={props.onClick} imagem="icone-hyundai.svg" nomeMarca="hyundai"/>
            </div>
            <div className="h-px w-width-300px bg-zinc-300 my-5"></div>
        </div>
    )
}

export default FiltroMarca