import { useEffect, useRef, useState } from "react"
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
    const [menuMobileAtivo, setMenuMobileAtivo] = useState('')


    useEffect(() => {
        if (dadosNovoAnuncio.length != ''){
            novoAnuncio(dadosNovoAnuncio)
            setTelaDeAnuncioVisivel(false)
            setTelaDeAnuncioPublicadoVisivel(true)
        }
    }, [dadosNovoAnuncio])

    const menuMobileToggle = () => {
        menuMobileAtivo === '' ? setMenuMobileAtivo('ativo') : setMenuMobileAtivo('')
    }

    const pesquisarLupa = (e) => {
        aoPesquisarLupa(e)
        setMenuMobileAtivo('')
    }
    
    const clicarSugestaoPesquisa = (e) => {
        veiculoSugeridoClicado(e)
        setMenuMobileAtivo('')
    }

    return (
        <header className="max-md:fixed max-md:z-[2] w-full bg-teal-400 h-28 flex justify-around items-center">
            <Logo />
            <MenuMobile 
                aoClicarMenuMobile={menuMobileToggle}
                classeAtivo={menuMobileAtivo}
            />
            <div id="containerNav" className={`navList ${menuMobileAtivo} max-md:w-screen flex justify-around min-w-[550px] w-1/2`}>
                <PesquisaDeVeiculos
                    opacidadeNavLi={menuMobileAtivo}
                    aoPesquisarLupa={pesquisarLupa}
                    veiculoSugeridoClicado={clicarSugestaoPesquisa}
                    aoPesquisarVeiculo={(e) => aoPesquisarVeiculo(e)}
                    listaDeSugestao={listaDeSugestao}
                />
                <BotaoAnunciar
                    opacidadeNavLi={menuMobileAtivo}
                    onClick={() => setTelaDeAnuncioVisivel((prevState) => !prevState)}
                />
                <BotaoChat
                    opacidadeNavLi={menuMobileAtivo}
                    onClick={() => setTelaChatVisivel((prevState) => !prevState)}
                />
                <BotaoEntrar
                    opacidadeNavLi={menuMobileAtivo}
                    onClick={() => setTelaEntrarVisivel((prevState) => !prevState)}
                />
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