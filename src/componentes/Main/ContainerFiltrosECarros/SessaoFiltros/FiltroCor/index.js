import BotaoCor from "./BotaoCor"
import TituloFiltro from "../TituloFiltro"

const FiltroCor = (props) => {
    return (
        <div>
            <TituloFiltro imagem="icone-cor.svg" alt="Ícone cor" tituloFiltro="Cor"/>
            <div className="divFiltroCor text-font-10px text-center flex flex-wrap w-80">
                    <BotaoCor onClick={props.onClick} cor="bg-slate-100" nomeCor="branco"/>
                    <BotaoCor onClick={props.onClick} cor="bg-zinc-950" nomeCor="preto"/>
                    <BotaoCor onClick={props.onClick} cor="bg-zinc-700" nomeCor="cinza"/>
                    <BotaoCor onClick={props.onClick} cor="bg-red-900" nomeCor="vermelho"/>
                    <BotaoCor onClick={props.onClick} cor="bg-green-900" nomeCor="verde"/>
                    <BotaoCor onClick={props.onClick} cor="bg-blue-900" nomeCor="azul"/>
                </div>
                <div className="h-px w-width-300px bg-zinc-300 my-5"></div>
        </div>
    )
}

export default FiltroCor