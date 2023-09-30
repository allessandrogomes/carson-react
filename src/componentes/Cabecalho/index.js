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
    const [menuMobileAtivo, setMenuMobileAtivo] = useState(false)
    const [navListTranslateXValue, setNavListTranslateXValue] = useState('full')
    const [valorOpacidadeLinks, setValorOpacidadeLinks] = useState('0')


    useEffect(() => {
        if (dadosNovoAnuncio.length != ''){
            novoAnuncio(dadosNovoAnuncio)
            setTelaDeAnuncioVisivel(false)
            setTelaDeAnuncioPublicadoVisivel(true)
        }
    }, [dadosNovoAnuncio])

    useEffect(() => {
        if(menuMobileAtivo) {
            setNavListTranslateXValue('0px')
            setValorOpacidadeLinks('100')
        } else {
            setNavListTranslateXValue('full')
            setValorOpacidadeLinks('0')
        }
    }, [menuMobileAtivo])

    const menuMobileToggle = () => {
        setMenuMobileAtivo(prevState => !prevState)
    }

    const pesquisarLupa = (e) => {
        aoPesquisarLupa(e)
        setMenuMobileAtivo(false)
    }
    
    const clicarSugestaoPesquisa = (e) => {
        veiculoSugeridoClicado(e)
        setMenuMobileAtivo(false)
    }

    return (
        <header className="max-md:fixed w-full h-28 bg-teal-400 flex justify-around items-center">
            <Logo />
            <MenuMobile aoClicarMenuMobile={menuMobileToggle}/>
            <div id="containerNav" className={`navList max-md:translate-x-${navListTranslateXValue} max-md:w-screen flex justify-around min-w-[550px] w-1/2`}>
                <PesquisaDeVeiculos
                    valorOpacidade={valorOpacidadeLinks}
                    aoPesquisarLupa={pesquisarLupa}
                    veiculoSugeridoClicado={clicarSugestaoPesquisa}
                    aoPesquisarVeiculo={(e) => aoPesquisarVeiculo(e)}
                    listaDeSugestao={listaDeSugestao}
                />
                <BotaoAnunciar
                    valorOpacidade={valorOpacidadeLinks}
                    onClick={() => setTelaDeAnuncioVisivel((prevState) => !prevState)}
                />
                <BotaoChat
                    valorOpacidade={valorOpacidadeLinks}
                    onClick={() => setTelaChatVisivel((prevState) => !prevState)}
                />
                <BotaoEntrar
                    valorOpacidade={valorOpacidadeLinks}
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