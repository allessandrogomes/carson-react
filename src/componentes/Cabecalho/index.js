import BotaoAnunciar from "./BotaoAnunciar"
import BotaoChat from "./BotaoChat"
import BotaoEntrar from "./BotaoEntrar"
import PesquisaDeVeiculos from "./PesquisaDeVeiculos"
import Logo from "./Logo"
import MenuMobile from "./MenuMobile"
import TelaAnuncioPublicado from "./TelaAnuncioPublicado"
import TelaEsqueciMinhaSenha from "./TelaEsqueciMinhaSenha"
import { useState } from "react"
import TelaDeAnuncio from "./TelaDeAnuncio"
import FundoDesfocado from "./FundoDesfocado"
import TelaChat from "./TelaChat"
import TelaEntrar from "./TelaEntrar"
import TelaDeCadastro from "./TelaDeCadastro"


const Cabecalho = () => {

    const [telaDeAnuncioVisivel, setTelaDeAnuncioVisivel] = useState(false)
    const [telaChatVisivel, setTelaChatVisivel] = useState(false)
    const [telaEntrarVisivel, setTelaEntrarVisivel] = useState(false)
    const [telaDeCadastroVisivel, setTelaDeCadastroVisivel] = useState(false)
    const [telaEsqueciSenhaVisivel, setTelaEsqueciSenhaVisivel] = useState(false)

    const toggleTelaDeAnuncio = () => {
        setTelaDeAnuncioVisivel((prevState) => !prevState)
    }

    const toggleTelaChat = () => {
        setTelaChatVisivel((prevState) => !prevState)
    }

    const toggleTelaEntrar = () => {
        setTelaEntrarVisivel((prevState) => !prevState)
    }

    const toggleTelaDeCadastro = () => {
        setTelaDeCadastroVisivel((prevState) => !prevState)
    }

    const toggleTelaEsqueciSenha = () => {
        setTelaEsqueciSenhaVisivel((prevState) => !prevState)
    }

    return (
        <header className="max-md:fixed w-full h-28 bg-teal-400 flex justify-around items-center">
            <Logo />
            <MenuMobile />
            <div id="containerNav" className="navList max-md:w-screen flex justify-around min-w-[550px] w-1/2">
                <PesquisaDeVeiculos />
                <BotaoAnunciar onClick={toggleTelaDeAnuncio}/>
                <BotaoChat onClick={toggleTelaChat}/>
                <BotaoEntrar onClick={toggleTelaEntrar}/>
            </div>
            {telaDeAnuncioVisivel && (
                <>
                    <FundoDesfocado />
                    <TelaDeAnuncio aoClicarNoX={toggleTelaDeAnuncio}/>
                </>    
            )}
            <TelaChat visivel={telaChatVisivel} aoClicarNoX={toggleTelaChat}/>
            {telaEntrarVisivel && (
                <>
                    <FundoDesfocado />
                    <TelaEntrar aoClicarEsqueciSenha={toggleTelaEsqueciSenha} aoClicarParaCadastrar={toggleTelaDeCadastro} aoClicarNoX={toggleTelaEntrar}/>
                </>
            )}
            {telaDeCadastroVisivel && (
                <>
                    <FundoDesfocado />
                    <TelaDeCadastro aoClicarNoX={toggleTelaDeCadastro}/>
                </>
            )}
            {telaEsqueciSenhaVisivel && <TelaEsqueciMinhaSenha aoClicarNoX={toggleTelaEsqueciSenha}/>}
            <TelaAnuncioPublicado />
        </header>
    )
}

export default Cabecalho