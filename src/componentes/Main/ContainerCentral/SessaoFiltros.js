import FiltroAno from "./SessaoFiltros/FiltroAno"
import FiltroCor from "./SessaoFiltros/FiltroCor"
import FiltroEstado from "./SessaoFiltros/FiltroEstado"
import FiltroMarca from "./SessaoFiltros/FiltroMarca"
import FiltroPreco from "./SessaoFiltros/FiltroPreco"

function SessaoFiltros() {
    return (
        <section className="sectionFiltros max-md:w-full w-width-340px flex flex-col m-6">
            <FiltroEstado />
            <FiltroCor />
            <FiltroMarca />
            <FiltroAno />
            <FiltroPreco />
        </section>
    )
}

export default SessaoFiltros