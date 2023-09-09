import { useEffect, useRef, useState } from "react"
import InputTelaDeAnuncio from "./InputTelaDeAnuncio"
import LabelTelaDeAnuncio from "./LabelTelaDeAnuncio"
import OptionTelaDeAnuncio from "./OptionTelaDeAnuncio"
const TelaDeAnuncio = (props) => {
    const marcas = ['Chevrolet', 'Fiat', 'Ford', 'Honda', 'Mitsubishi', 'Volkswagen', 'Toyota', 'Hyundai']
    const estados = ['Acre', 'São Paulo', 'Rio de Janeiro', 'Mato Grosso', 'Minas Gerais', 'Alagoas', 'Bahia',
        'Rio Grande do Sul', 'Maranhão', 'Amazonas']
    const cores = ['Branco', 'Cinza', 'Azul', 'Verde', 'Vermelho', 'Preto']

    const [dadosDeAnuncio, setDadosDeAnuncio] = useState({
        marca: '',
        modelo: '',
        preco: '',
        ano: '',
        km: '',
        cidade: '',
        estado: '',
        url: '',
        cor: '',
    })

    const aoMudarValor = (e) => {
        formatacaoApenasNumeros(e)
        formatacaoApenasLetras(e)
        const { name, value } = e.target
        setDadosDeAnuncio({
            ...dadosDeAnuncio,
            [name]: value,
        })
    }

    const aoFazerOSubmit = (e) => {
        e.preventDefault()
        console.log(dadosDeAnuncio)
    }

    const formatacaoApenasNumeros = (e) => {
        const { name } = e.target
        const namesParaFiltrar = ["preco", "ano", "km"]
        if (namesParaFiltrar.includes(name)) {
            e.target.value = e.target.value.replace(/\D/g, '')
        }
    }

    const formatacaoApenasLetras = (e) => {
        const { name } = e.target
        const namesParaFiltrar = ["cidade"]
        if (namesParaFiltrar.includes(name)) {
            e.target.value = e.target.value.replace(/[^a-zA-ZÀ-ÿ ]/gu, '')
        }
    }

    return (
        <div className="telaDeAnuncioResponsive fixed rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-width-600px h-600 bg-teal-400 p-5"
            id="telaDeAnuncio">
            <span onClick={props.aoClicarNoX} className="w-8 absolute top-2.5 right-2.5 cursor-pointer" id="fecharTelaDeAnuncio"><img
                src="./imagens/Main/botao-fechar.png" alt="Botão fechar tela de Anúncio" /></span>
            <h2 className="font-bold font-archivo text-black text-center mt-10 text-2xl">Anunciar na CarsOn</h2>
            <p className="text-center mt-5 font-archivo">Preencha as informações do veículo</p>
            <form onSubmit={aoFazerOSubmit} className="formAnuncioResponsive text-left flex flex-col h-4/6 flex-wrap mt-10 mx-10 items-center" action="#">
                <LabelTelaDeAnuncio nome="Marca" for="marca" />
                <select className="w-48 h-6 rounded font-archivo font-bold mb-4 informacaoCarro" required id="marca" name="marca" value={dadosDeAnuncio.marca} onChange={aoMudarValor}>
                    <option value="">Selecione...</option>
                    <OptionTelaDeAnuncio itens={marcas} />
                </select>

                <LabelTelaDeAnuncio nome="Modelo" for="inputAnunciarModelo" />
                <InputTelaDeAnuncio onChange={aoMudarValor} id="modelo" name="modelo" value={dadosDeAnuncio.modelo} maxLength="15" classe="" />

                <LabelTelaDeAnuncio nome="Preço" for="inputAnunciarPreco" />
                <InputTelaDeAnuncio value={dadosDeAnuncio.preco} onChange={aoMudarValor} name="preco" id="preco" maxLength="10" classe="inputPreco" />

                <LabelTelaDeAnuncio nome="Ano" for="inputAnunciarAno" />
                <InputTelaDeAnuncio value={dadosDeAnuncio.ano} onChange={aoMudarValor} name="ano" id="ano" minLength="4" maxLength="4" classe="inputAno" />

                <LabelTelaDeAnuncio nome="Km" for="inputAnunciarKm" />
                <InputTelaDeAnuncio value={dadosDeAnuncio.km} onChange={aoMudarValor} id="km" name="km" maxLength="6" classe="inputAno" />

                <LabelTelaDeAnuncio nome="Cidade" for="inputAnunciarCidade" />
                <InputTelaDeAnuncio value={dadosDeAnuncio.cidade} onChange={aoMudarValor} id="cidade" name="cidade" maxLength="25" classe="" />

                <LabelTelaDeAnuncio nome="Estado" for="inputAnunciarEstado" />
                <select className="w-48 h-6 rounded font-archivo font-bold mb-4 informacaoCarro" name="estado" onChange={aoMudarValor} value={dadosDeAnuncio.estado} required id="estado">
                    <option value="">Selecione...</option>
                    <OptionTelaDeAnuncio itens={estados} />
                </select>

                <LabelTelaDeAnuncio nome="Url imagem do veículo" for="inputAnunciarImagemUrl" />
                <InputTelaDeAnuncio name="url" onChange={aoMudarValor} value={dadosDeAnuncio.url} id="imagem" maxLength="" classe="" />

                <LabelTelaDeAnuncio nome="Cor" for="inputAnunciarCor" />
                <select onChange={aoMudarValor} value={dadosDeAnuncio.cor} name="cor" className="w-48 h-6 rounded font-archivo font-bold mb-8 informacaoCarro" required id="cor">
                    <option value="">Selecione...</option>
                    <OptionTelaDeAnuncio itens={cores} />
                </select>

                <button type="submit" id="btnAnunciarNovoCarro" className="border-2 p-4 border-color2 bg-white text-color2 font-archivo font-bold rounded-full">Anunciar</button>
            </form>
        </div>
    )
}

export default TelaDeAnuncio
