import { useEffect, useState } from "react"
import Logo from "./Logo"
import MenuMobile from "./MenuMobile"
import PesquisaDeVeiculos from "./PesquisaDeVeiculos"
import BotaoAnunciar from "./BotaoAnunciar"
import BotaoChat from "./BotaoChat"
import BotaoEntrar from "./BotaoEntrar"
import TelaDeAnuncio from "./TelaDeAnuncio"
import TelaAnuncioPublicado from "./TelaAnuncioPublicado"
import TelaChat from "./TelaChat"
import TelaEntrar from "./TelaEntrar"
import TelaDeCadastro from "./TelaDeCadastro"
import TelaEsqueciMinhaSenha from "./TelaEsqueciMinhaSenha"
import FundoDesfocado from "./FundoDesfocado"


const Cabecalho = ({ novoAnuncio, aoPesquisarVeiculo, listaDeSugestao, veiculoSugeridoClicado, aoPesquisarLupa }) => {

    const [telaDeAnuncioVisivel, setTelaDeAnuncioVisivel] = useState(false)
    const [telaChatVisivel, setTelaChatVisivel] = useState(false)
    const [telaEntrarVisivel, setTelaEntrarVisivel] = useState(false)
    const [telaDeCadastroVisivel, setTelaDeCadastroVisivel] = useState(false)
    const [telaEsqueciSenhaVisivel, setTelaEsqueciSenhaVisivel] = useState(false)
    const [telaDeAnuncioPublicadoVisivel, setTelaDeAnuncioPublicadoVisivel] = useState(false)
    const [dadosNovoAnuncio, setDadosNovoAnuncio] = useState('')


    useEffect(() => {
        if (dadosNovoAnuncio.length != ''){
            novoAnuncio(dadosNovoAnuncio)
            setTelaDeAnuncioVisivel(false)
            setTelaDeAnuncioPublicadoVisivel(true)
        }
    }, [dadosNovoAnuncio])

    return (
        <header className="max-md:fixed w-full h-28 bg-teal-400 flex justify-around items-center">
            <Logo />
            <MenuMobile />
            <div id="containerNav" className="navList max-md:w-screen flex justify-around min-w-[550px] w-1/2">
                <PesquisaDeVeiculos
                    aoPesquisarLupa={aoPesquisarLupa}
                    veiculoSugeridoClicado={veiculoSugeridoClicado}
                    aoPesquisarVeiculo={(e) => aoPesquisarVeiculo(e)}
                    listaDeSugestao={listaDeSugestao}
                />
                <BotaoAnunciar onClick={() => setTelaDeAnuncioVisivel((prevState) => !prevState)}/>
                <BotaoChat onClick={() => setTelaChatVisivel((prevState) => !prevState)}/>
                <BotaoEntrar onClick={() => setTelaEntrarVisivel((prevState) => !prevState)}/>
            </div>
            <TelaChat visivel={telaChatVisivel} aoClicarNoX={() => setTelaChatVisivel((prevState) => !prevState)}/>
            {telaDeAnuncioVisivel && (
                <>
                    <FundoDesfocado />
                    <TelaDeAnuncio  
                        dadosNovoAnuncio={dados => setDadosNovoAnuncio(dados)}
                        aoClicarNoX={() => setTelaDeAnuncioVisivel((prevState) => !prevState)}/>
                </>    
            )}
            {telaEntrarVisivel && (
                <>
                    <FundoDesfocado />
                    <TelaEntrar aoClicarEsqueciSenha={() => setTelaEsqueciSenhaVisivel((prevState) => !prevState)} aoClicarParaCadastrar={() => setTelaDeCadastroVisivel((prevState) => !prevState)} aoClicarNoX={() => setTelaEntrarVisivel((prevState) => !prevState)}/>
                </>
            )}
            {telaDeCadastroVisivel && (
                <>
                    <TelaDeCadastro aoClicarNoX={() => setTelaDeCadastroVisivel((prevState) => !prevState)}/>
                </>
            )}
            {telaEsqueciSenhaVisivel && <TelaEsqueciMinhaSenha aoClicarNoX={() => setTelaEsqueciSenhaVisivel((prevState) => !prevState)}/>}
            {telaDeAnuncioPublicadoVisivel && (
                <>
                    <FundoDesfocado />
                    <TelaAnuncioPublicado onClickOk={() => setTelaDeAnuncioPublicadoVisivel(false)}/>
                </>
                )
            }
        </header>
    )
}

export default Cabecalho