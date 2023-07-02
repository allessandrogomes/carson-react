import BtnAbrirFiltrosMobile from "./BtnAbrirFiltrosMobile"
import FundoDesfocadoFiltros from "./FundoDesfocadoFiltros"

function ContainerCentral({ children }) {
    return (
        <div className="divCentral flex">
            <FundoDesfocadoFiltros />
            <BtnAbrirFiltrosMobile />
            { children }
        </div>
    )
}
export default ContainerCentral