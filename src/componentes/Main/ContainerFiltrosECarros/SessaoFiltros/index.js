import FiltroAno from "./FiltroAno"
import FiltroCor from "./FiltroCor"
import FiltroEstado from "./FiltroEstado"
import FiltroMarca from "./FiltroMarca"
import FiltroPreco from "./FiltroPreco"

function SessaoFiltros({ children, filtrosAbertos }) {
    return (
        <section className={`sectionFiltros ${filtrosAbertos} w-width-340px flex flex-col m-6`}>
            {children}
        </section>
    )
}

export default SessaoFiltros