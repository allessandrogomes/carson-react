import BtnAbrirFiltrosMobile from "./BtnAbrirFiltrosMobile"
import FundoDesfocadoFiltros from "./FundoDesfocadoFiltros"
import FiltrosAtivos from "./FiltrosAtivos"
import SessaoCarros from "./SessaoCarros"
import SessaoFiltros from "./SessaoFiltros"
import { useEffect, useState } from "react"
import FiltroEstado from "./SessaoFiltros/FiltroEstado"
import FiltroCor from "./SessaoFiltros/FiltroCor"
import FiltroMarca from "./SessaoFiltros/FiltroMarca"
import FiltroAno from "./SessaoFiltros/FiltroAno"
import FiltroPreco from "./SessaoFiltros/FiltroPreco"

const ContainerFiltrosECarros = () => {
    const [listaDeCarros, setListaDeCarros] = useState([])
    const [estadosFiltrados, setEstadosFiltrados] = useState([])
    const [coresFiltradas, setCoresFiltradas] = useState([])
    const [marcasFiltradas, setMarcasFiltradas] = useState([])
    const [anoDe, setAnoDe] = useState('')
    const [anoAte, setAnoAte] = useState('')
    const [precoDe, setPrecoDe] = useState('')
    const [precoAte, setPrecoAte] = useState('')
    const [carrosFiltrados, setCarrosFiltrados] = useState([])
    const [carrosAMostrar, setCarrosAMostrar] = useState([])

    const ednPointDaAPI = 'https://raw.githubusercontent.com/allessandrogomes/carsOn/main/carros.json'

    //Busca os dados da API e mostra o conteúdo
    useEffect(() => {
        async function buscarCarrosDaApi() {
            const res = await fetch(ednPointDaAPI)
            const listaDeCarros = await res.json()
            setListaDeCarros(listaDeCarros)
            setCarrosAMostrar(listaDeCarros)
        }
        buscarCarrosDaApi()
    }, [])

    //Filtra os estados e salva-os na constante estadosFiltrados
    const filtrarEstados = (evento) => {
        const estadoClicado = evento.currentTarget
        estadoClicado.classList.toggle("border-2")
        const novoEstadoFiltrado = evento.currentTarget.querySelector('h5').textContent
        const estadosAtualizados = estadosFiltrados.includes(novoEstadoFiltrado)
        ? estadosFiltrados.filter(estado => estado !== novoEstadoFiltrado)
        : [...estadosFiltrados, novoEstadoFiltrado]
        setEstadosFiltrados(estadosAtualizados)
    }

    //Filtra as cores e salva-as na constante coresFiltradas
    const filtrarCores = (evento) => {
        const corClicada = evento.currentTarget
        corClicada.classList.toggle("border-2")
        const novaCorFiltrada = evento.currentTarget.querySelector('h5').textContent
        const coresAtualizadas = coresFiltradas.includes(novaCorFiltrada)
        ? coresFiltradas.filter(cor => cor !== novaCorFiltrada)
        : [...coresFiltradas, novaCorFiltrada]
        setCoresFiltradas(coresAtualizadas)
    }

    //Filtra as marcas e salva-as na constante marcasFiltradas
    const filtrarMarcas = (evento) => {
        const marcaClicada = evento.currentTarget
        marcaClicada.classList.toggle("border-2")
        const novaMarcaFiltrada = evento.currentTarget.querySelector('h5').textContent
        const marcasAtualizadas = marcasFiltradas.includes(novaMarcaFiltrada)
        ? marcasFiltradas.filter(marca => marca !== novaMarcaFiltrada)
        : [...marcasFiltradas, novaMarcaFiltrada]
        setMarcasFiltradas(marcasAtualizadas)
    }

    //Formata o input PrecoDe em BRL e salva o valor na constante PrecoDe
    const formatacaPrecoDe = (evento) => {
        const valor = evento.target.value.replace(/\D/g, '')
        const valorInteiro = parseInt(valor, 10)

        if(isNaN(valorInteiro)) {
            setPrecoDe('')
        } else {
            const valorFormatado = valorInteiro.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            })
            setPrecoDe(valorFormatado.replace(/^(R\$\s*)?/i, ''))
        }
    }

    //Formata o input PrecoAte em BRL e salva o valor na constante PrecoAte
    const formatacaPrecoAte = (evento) => {
        const valor = evento.target.value.replace(/\D/g, '')
        const valorInteiro = parseInt(valor, 10)

        if(isNaN(valorInteiro)) {
            setPrecoAte('')
        } else {
            const valorFormatado = valorInteiro.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            })
            setPrecoAte(valorFormatado.replace(/^(R\$\s*)?/i, ''))
        }
    }

    //Filtra os carros de acordo com os filtros selecionados e salva na constante carrosFiltrados
    useEffect(() => {
        setCarrosFiltrados(listaDeCarros.filter(function (carro) {
            const precoDeSemFormatacao = precoDe.replace(/\./g, "")
            const precoAteSemFormatacao = precoAte.replace(/\./g, "")
            return (estadosFiltrados.length === 0 || estadosFiltrados.includes(carro.estado)) &&
                    (coresFiltradas.length === 0 || coresFiltradas.includes(carro.cor)) &&
                    (marcasFiltradas.length === 0 || marcasFiltradas.includes(carro.marca)) &&
                    (anoDe.length === 0 || anoDe <= carro.ano) &&
                    (anoAte.length === 0 || anoAte >= carro.ano || anoAte == 0) &&
                    (precoDeSemFormatacao.length === 0 || precoDeSemFormatacao <= carro.preco) &&
                    (precoAteSemFormatacao.length === 0 || precoAteSemFormatacao >= carro.preco || precoAteSemFormatacao == 0)
        }))
    }, [estadosFiltrados, coresFiltradas, marcasFiltradas, anoDe, anoAte, precoDe, precoAte])

    //Se existirem carrosFiltrados, serão adicionados na constante carrosAMostrar. Senão, retorna um array vazio na constante carrosAMostrar
    useEffect(() => {
        carrosFiltrados.length > 0 ? setCarrosAMostrar(carrosFiltrados) : setCarrosAMostrar([])
    }, [carrosFiltrados]);

    return (
        <div className="divCentral flex">
            <SessaoFiltros>
                <FiltroEstado onClick={filtrarEstados}/>
                <FiltroCor onClick={filtrarCores}/>
                <FiltroMarca onClick={filtrarMarcas}/>
                <FiltroAno valueAte={anoAte} valueDe={anoDe} onChangeAte={(evento) => setAnoAte(evento.target.value.replace(/\D/g, ''))} onChangeDe={(evento) => setAnoDe(evento.target.value.replace(/\D/g, ''))}/>
                <FiltroPreco valuePrecoAte={precoAte} onChangeAte={formatacaPrecoAte} valuePrecoDe={precoDe} onChangeDe={formatacaPrecoDe}/>
            </SessaoFiltros>
            <div className="p-8 w-screen bg-color4">
                <FiltrosAtivos />
                <SessaoCarros >
                    {carrosAMostrar.length == 0 ? <h3>Não existe nenhum veículo dentre os filtros selecionados.</h3> : carrosAMostrar.map(carro => {
                        return (
                        <div className="carro w-56 m-1 mb-10" key={carro.nome}>
                            <div className="mb-2 rounded-borde-radius-32px w-56 h-32 bg-no-repeat bg-cover"
                                style={{backgroundImage: `url(${carro.imagem})`}}>
                            </div>
                        <div className="flex text-left">
                            <div className="w-px h-50 bg-color3"></div>
                            <div>
                                <h3 className="nomeCarro ml-4 uppercase mb-1 text-base font-archivo font-bold text-color2">{carro.nome}</h3>
                                <h4 className="ml-4 mb-1 text-lg font-bold font-big-shoulders-display">R$ {carro.preco}</h4>
                                <div className="flex mb-3">
                                    <h4 className="ml-4 mr-6 font-archivo text-sm">{carro.ano}&#47;{carro.ano}</h4>
                                    <h4 className="font-archivo text-sm">{carro.km}km</h4>
                                </div>
                                <h4 className="ml-4 mb-4 font-archivo text-sm capitalize">{carro.cidade} - <span className="estadoCarro uppercase">{carro.estado}</span></h4>
                                <button
                                    className="text-color1 font-bold font-archivo ml-4 px-14 py-2 rounded-borde-radius-32px border border-color3">Comprar</button>
                            </div>
                        </div>
                    </div>)
                    })}
                </SessaoCarros>
            </div>
        </div>
    )
}
export default ContainerFiltrosECarros


{/* <FundoDesfocadoFiltros />
<BtnAbrirFiltrosMobile /> */}