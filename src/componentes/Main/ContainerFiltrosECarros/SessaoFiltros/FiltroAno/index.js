import InputAnoEPreco from "../InputAnoEPreco"
import TituloFiltro from "../TituloFiltro"

const FiltroAno = () => {
    return (
        <div>
            <TituloFiltro imagem="icone-calendario.svg" alt="Ícone Calendário" tituloFiltro="Ano"/>
            <div className="flex">
                <InputAnoEPreco placeHolder="de" id="inputAnoDe" h5="ex.: 2010"/>
                <InputAnoEPreco placeHolder="ate" id="inputAnoAte" h5="ex.: 2018"/>
            </div>
                <div className="h-px w-width-300px bg-zinc-300 my-5"></div>
        </div>
    )
}

export default FiltroAno