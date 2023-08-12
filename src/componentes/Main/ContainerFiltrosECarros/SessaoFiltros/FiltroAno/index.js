import InputAnoEPreco from "../InputAnoEPreco"
import TituloFiltro from "../TituloFiltro"

const FiltroAno = (props) => {
    return (
        <div>
            <TituloFiltro imagem="icone-calendario.svg" alt="Ícone Calendário" tituloFiltro="Ano"/>
            <div className="flex">
                <InputAnoEPreco value={props.valueDe} onChange={props.onChangeDe} placeHolder="de" id="inputAnoDe" h5="ex.: 2010" maxLength="4"/>
                <InputAnoEPreco value={props.valueAte} onChange={props.onChangeAte} placeHolder="ate" id="inputAnoAte" h5="ex.: 2018" maxLength="4"/>
            </div>
                <div className="h-px w-width-300px bg-zinc-300 my-5"></div>
        </div>
    )
}

export default FiltroAno