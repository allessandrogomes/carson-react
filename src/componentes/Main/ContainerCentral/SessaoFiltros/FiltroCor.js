import BotaoCor from "./BotaoCor/BotaoCor"
import TituloFiltro from "./TituloFiltro/TituloFiltro"

function FiltroCor() {
    return (
        <div>
            <TituloFiltro imagem="icone-cor.svg" alt="Ícone cor" tituloFiltro="Cor"/>
            <div className="divFiltroCor text-font-10px text-center flex flex-wrap w-80">
                    <BotaoCor cor="bg-slate-100" nomeCor="branco"/>
                    <BotaoCor cor="bg-zinc-950" nomeCor="preto"/>
                    <BotaoCor cor="bg-zinc-700" nomeCor="cinza"/>
                    <BotaoCor cor="bg-red-900" nomeCor="vermelho"/>
                    <BotaoCor cor="bg-green-900" nomeCor="verde"/>
                    <BotaoCor cor="bg-blue-900" nomeCor="azul"/>
                </div>
                <div className="h-px w-width-300px bg-zinc-300 my-5"></div>
        </div>
    )
}

export default FiltroCor