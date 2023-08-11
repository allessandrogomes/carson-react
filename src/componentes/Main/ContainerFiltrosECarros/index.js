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
    const [carrosFiltrados, setCarrosFiltrados] = useState([])
    const [carrosAMostrar, setCarrosAMostrar] = useState([])
    const ednPointDaAPI = 'https://raw.githubusercontent.com/allessandrogomes/carsOn/main/carros.json'

    useEffect(() => {
        async function buscarCarrosDaApi() {
            const res = await fetch(ednPointDaAPI)
            const listaDeCarros = await res.json()
            setListaDeCarros(listaDeCarros)
            setCarrosAMostrar(listaDeCarros)
        }
        buscarCarrosDaApi()
    }, [])

    const filtrarEstados = (evento) => {
        const novoEstadoFiltrado = evento.currentTarget.querySelector('h5').textContent
        const estadosAtualizados = estadosFiltrados.includes(novoEstadoFiltrado)
        ? estadosFiltrados.filter(estado => estado !== novoEstadoFiltrado)
        : [...estadosFiltrados, novoEstadoFiltrado]
        setEstadosFiltrados(estadosAtualizados)
    }

    const filtrarCores = (evento) => {
        const novaCorFiltrada = evento.currentTarget.querySelector('h5').textContent
        const coresAtualizadas = coresFiltradas.includes(novaCorFiltrada)
        ? coresFiltradas.filter(cor => cor !== novaCorFiltrada)
        : [...coresFiltradas, novaCorFiltrada]
        setCoresFiltradas(coresAtualizadas)
    }

    useEffect(() => {
        setCarrosFiltrados(listaDeCarros.filter(function (carro) {
            return (estadosFiltrados.length === 0 || estadosFiltrados.includes(carro.estado)) &&
                    (coresFiltradas.length === 0 || coresFiltradas.includes(carro.cor))
        }))
    }, [estadosFiltrados, coresFiltradas])

    useEffect(() => {
        if(carrosFiltrados.length > 0) {
            setCarrosAMostrar(carrosFiltrados)
        } else {
            setCarrosAMostrar([])
        }
    }, [carrosFiltrados]);

    return (
        <div className="divCentral flex">
            <SessaoFiltros>
                <FiltroEstado onClick={filtrarEstados}/>
                <FiltroCor onClick={filtrarCores}/>
                <FiltroMarca />
                <FiltroAno />
                <FiltroPreco />
            </SessaoFiltros>
            <div className="p-8 w-screen bg-color4">
                <FiltrosAtivos />
                <SessaoCarros >
                    {carrosAMostrar.length == 0 ? <h3>Não existe nenhum veículo dentre os filtros selecionados.</h3> : carrosAMostrar.map(carro => {
                        return (
                        <div className="carro w-56 m-1 mb-10">
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