import Creditos from "./Creditos"
import RedesSociais from "./RedesSociais"

function Rodape() {
    return (
        <footer className="text-center h-28 bg-teal-400 flex items-center justify-center font-archivo flex-col">
            <Creditos />
            <RedesSociais />
        </footer>
    )
}

export default Rodape