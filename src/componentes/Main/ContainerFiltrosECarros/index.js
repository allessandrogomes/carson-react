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
    const [filtrosAtivos, setFiltrosAtivos] = useState([])
    const [btnsFiltros, setBtnsFiltros] = useState([])

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
        setBtnsFiltros(btnsFiltros.includes(estadoClicado) ? btnsFiltros.filter(btnEstado => btnEstado !== estadoClicado) : [...btnsFiltros, estadoClicado])
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
        setBtnsFiltros(btnsFiltros.includes(corClicada) ? btnsFiltros.filter(btnCor => btnCor !== corClicada) : [...btnsFiltros, corClicada])
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
        setBtnsFiltros(btnsFiltros.includes(marcaClicada) ? btnsFiltros.filter(btnMarca => btnMarca !== marcaClicada) : [...btnsFiltros, marcaClicada])
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

    const removerFiltroAoClicarNoX = (evento) => {
        // Remove borda do botão ao clicar no X
        btnsFiltros.forEach(btnEstado => {
            const valorBtnEstado = btnEstado.querySelector('h5').textContent
            if(valorBtnEstado == evento) {
                btnEstado.classList.remove("border-2")
                setBtnsFiltros(btnsFiltros.filter(item => item !== btnEstado))
            }
        })
        // Remove filtro ao clicar no X
        if(estadosFiltrados.includes(evento)) {
            const filtroRemovido = estadosFiltrados.filter(item => item !== evento)
            setEstadosFiltrados(filtroRemovido)
        } else if(coresFiltradas.includes(evento)) {
            const filtroRemovido = coresFiltradas.filter(item => item !== evento)
            setCoresFiltradas(filtroRemovido)
        } else if(marcasFiltradas.includes(evento)) {
            const filtroRemovido = marcasFiltradas.filter(item => item !== evento)
            setMarcasFiltradas(filtroRemovido)
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
        setFiltrosAtivos([...estadosFiltrados, ...coresFiltradas, ...marcasFiltradas])
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
                <FiltrosAtivos fecharFiltro={removerFiltroAoClicarNoX} filtrosAtivos={filtrosAtivos} />
                <SessaoCarros carrosAMostrar={carrosAMostrar} />
            </div>
        </div>
    )
}
export default ContainerFiltrosECarros


{/* <FundoDesfocadoFiltros />
<BtnAbrirFiltrosMobile /> */}