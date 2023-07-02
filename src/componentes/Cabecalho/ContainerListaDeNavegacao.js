import BotaoAnunciar from "./ContainerListaDeNavegacao/BotaoAnunciar"
import BotaoChat from "./ContainerListaDeNavegacao/BotaoChat"
import BotaoEntrar from "./ContainerListaDeNavegacao/BotaoEntrar"
import PesquisaDeVeiculos from "./ContainerListaDeNavegacao/PesquisaDeVeiculos"

function ContainerListaDeNavegacao() {
    return (
        <div className="navList max-md:w-screen flex justify-around min-w-[550px] w-1/2">
            <PesquisaDeVeiculos />
            <BotaoAnunciar />
            <BotaoChat />
            <BotaoEntrar />
        </div>
    )
}

export default ContainerListaDeNavegacao