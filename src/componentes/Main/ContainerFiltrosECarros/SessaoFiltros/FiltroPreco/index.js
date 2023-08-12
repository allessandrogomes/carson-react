import InputAnoEPreco from "../InputAnoEPreco"
import TituloFiltro from "../TituloFiltro"

const FiltroPreco = (props) => {
    return (
        <div>
            <TituloFiltro imagem="icone-sifrao.svg" alt="Ícone sifrão" tituloFiltro="Preço"/>
            <div className="flex">
                <InputAnoEPreco value={props.valuePrecoDe} onChange={props.onChangeDe} placeholder="de" id="inputPrecoDe" h5="ex.: 12.000" maxLength="10"/>
                <InputAnoEPreco value={props.valuePrecoAte} onChange={props.onChangeAte} placeholder="ate" id="inputPrecoAte" h5="ex.: 48.000" maxLength="10"/>
            </div>
        </div>
    )
}

export default FiltroPreco