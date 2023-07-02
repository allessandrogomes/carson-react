import InputAnoEPreco from "./InputAnoEPreco/InputAnoEPreco"
import TituloFiltro from "./TituloFiltro/TituloFiltro"

function FiltroPreco() {
    return (
        <div>
            <TituloFiltro imagem="icone-sifrao.svg" alt="Ícone sifrão" tituloFiltro="Preço"/>
            <div className="flex">
                <InputAnoEPreco placeholder="de" id="inputPrecoDe" h5="ex.: 12.000"/>
                <InputAnoEPreco placeholder="ate" id="inputPrecoAte" h5="ex.: 48.000"/>
            </div>
        </div>
    )
}

export default FiltroPreco