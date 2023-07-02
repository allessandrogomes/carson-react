import ContainerListaDeNavegacao from "./ContainerListaDeNavegacao"
import Logo from "./Logo"
import MenuMobile from "./MenuMobile"

function Cabecalho() {
    return (
        <header className="max-md:fixed w-full h-28 bg-teal-400 flex justify-around items-center">
            <Logo />
            <MenuMobile />
            <ContainerListaDeNavegacao />
        </header>
    )
}

export default Cabecalho