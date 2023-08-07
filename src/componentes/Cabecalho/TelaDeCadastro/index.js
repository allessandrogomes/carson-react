import { useState } from "react"
import InputTelaDeCadastro from "./InputTelaDeCadastro"
import LabelTelaDeCadastro from "./LabelTelaDeCadastro"

const TelaDeCadastro = ({ aoClicarNoX }) => {

    const [valorInputNomeCompleto, setValorInputNomeCompleto] = useState('')
    const [valorInputNascimento, setValorInputNascimento] = useState('')
    const [valorInputContato, setValorInputContato] = useState('')
    const [valorInputEmail, setValorInputEmail] = useState('')
    const [valorInputCep, setValorInputCep] = useState('')
    const [valorInputNumeroDaCasa, setValorInputNumeroDaCasa] = useState('')
    const [valorInputComplemento, setValorInputComplemento] = useState('')
    const [valorInputCidade, setValorInputCidade] = useState('')
    const [valorInputUf, setValorInputUf] = useState('')
    const [mensagemMenorDeIdade, setMensagemMenorDeIdade] = useState(false)
    const [valorInputLogradouro, setValorInputLogradouro] = useState('')
    const [valorInputBairro, setValorInputBairro] = useState('')
    const [mensagemErroCep, setMensagemErroCep] = useState(false)
    const [erroFormulario, setErroFormulario] = useState(false)
    const [mensagemFormularioEnviado, setMensagemFormularioEnviado] = useState(false)

    const formatacaoContato = (evento) => {
        const contato = evento.target.value.replace(/\D/g, '')

        if (contato.length === 11) {
            setValorInputContato(`(${contato.slice(0, 2)}) ${contato.slice(2, 7)}-${contato.slice(7)}`)
        } else {
            setValorInputContato(contato)
        }
    }

    const verificaIdade = (evento) => {
        const dataUsuario = new Date(evento.target.value)
        const dataAtual = new Date()
        const diferencaDatas = dataAtual - dataUsuario
        const idade = Math.floor(diferencaDatas / (1000*60*60*24*365.25))
        if(idade < 18) {
            setMensagemMenorDeIdade(true)
        } else {
            setMensagemMenorDeIdade(false)
        }
    } 

    async function buscaCep(evento) {
        const cepDigitado = evento.target.value
        try {
            var consultaCep = await fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
            var consultaCepConvertida = await consultaCep.json()
            if(consultaCepConvertida.erro) {
                throw Error('CEP não existente!')
            }
            setValorInputCidade(consultaCepConvertida.localidade)
            setValorInputLogradouro(consultaCepConvertida.logradouro)
            setValorInputUf(consultaCepConvertida.uf)
            setValorInputBairro(consultaCepConvertida.bairro)
            setMensagemErroCep(false)
        } catch (erro) {
            setValorInputCidade('')
            setValorInputLogradouro('')
            setValorInputUf('')
            setValorInputBairro('')
            setMensagemErroCep(true)
        }
    }

    const verificaFormulario = (evento) => {
        evento.preventDefault()
        if(mensagemErroCep || mensagemMenorDeIdade) {
            setErroFormulario(true)
            setMensagemFormularioEnviado(false)
        } else {
            setErroFormulario(false)
            setMensagemFormularioEnviado(true)
            setValorInputNomeCompleto('')
            setValorInputNascimento('')
            setValorInputContato('')
            setValorInputEmail('')
            setValorInputCep('')
            setValorInputCidade('')
            setValorInputNumeroDaCasa('')
            setValorInputComplemento('')
            setValorInputLogradouro('')
            setValorInputUf('')
            setValorInputBairro('')
        }
    }

    return (
        <div id="telaDeCadastro" className="flex gap-10 flex-col items-center fixed rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-width-600px h-600 bg-teal-400 p-5">
            <span onClick={aoClicarNoX} className="w-8 absolute top-2.5 right-2.5 cursor-pointer" id="fecharTelaDeCadastro"><img src="./imagens/Main/botao-fechar.png" alt="Botão fechar tela de Login"/></span>
            <h2 className="font-bold font-archivo text-black text-center mb-2 mt-4 text-2xl">Cadastro</h2>
            {erroFormulario && <p className="absolute top-[80px] font-bold text-red-600 text-sm">Por favor, verifique as informações e tente novamente!</p>}
            <div className="w-11/12 h-3/4">
                <form onSubmit={verificaFormulario} id="formCadastro" action="#" className="flex h-full w-full flex-col flex-wrap text-left">
                <LabelTelaDeCadastro nome="Nome completo" for="cadastroNomeCompleto"/>
                <InputTelaDeCadastro value={valorInputNomeCompleto} onChange={evento => setValorInputNomeCompleto(evento.target.value.replace(/[^a-zA-ZÀ-ÿ ]/gu, ''))} maxLength="50" id="cadastroNomeCompleto"/>

                <LabelTelaDeCadastro nome="Nascimento" for="cadastroNascimento"/>
                <InputTelaDeCadastro value={valorInputNascimento} onChange={evento => setValorInputNascimento(evento.target.value)} onBlur={verificaIdade} border={mensagemMenorDeIdade} id="cadastroNascimento" type="date" max="9999-12-31"/>
                {mensagemMenorDeIdade && <p className="absolute font-bold text-red-600 top-60 text-xs">Você precisa ter no mínimo 18 anos</p>}

                <LabelTelaDeCadastro nome="Contato (apenas números)" for="cadastroContato"/>
                <InputTelaDeCadastro value={valorInputContato} onChange={formatacaoContato} maxLength="11" minLength="11" id="cadastroContato" placeholder="ex: 11999234567"/>

                <LabelTelaDeCadastro nome="Email" for="cadastroEmail"/>
                <InputTelaDeCadastro value={valorInputEmail} onChange={evento => setValorInputEmail(evento.target.value)} id="cadastroEmail" maxLength="50" type="email"/>

                <LabelTelaDeCadastro nome="CEP (apenas números)" for="cadastroCep"/>
                <InputTelaDeCadastro onBlur={buscaCep} value={valorInputCep} border={mensagemErroCep} onChange={evento => setValorInputCep(evento.target.value.replace(/\D/g, ''))} id="cadastroCep" type="text" placeholder="ex: 10200300" maxLength="8" minLength="8"/>

                {mensagemErroCep && <div className="absolute font-bold text-red-600 bottom-[139px] text-xs" id="erroCep">CEP inválido. Tente novamente!</div>}

                <LabelTelaDeCadastro nome="Endereço" for="cadastroEndereco"/>
                <InputTelaDeCadastro value={valorInputLogradouro} onChange={evento => setValorInputLogradouro(evento.target.value)} maxLength="40" id="cadastroEndereco"/>
                
                <LabelTelaDeCadastro nome="N° da casa" for="cadastroNumeroDaCasa"/>
                <InputTelaDeCadastro value={valorInputNumeroDaCasa} onChange={evento => setValorInputNumeroDaCasa(evento.target.value.replace(/\D/g, ''))} maxLength="6" id="cadastroNumeroDaCasa"/>
                
                <LabelTelaDeCadastro nome="Complemento" for="cadastroComplemento"/>
                <InputTelaDeCadastro value={valorInputComplemento} onChange={evento => setValorInputComplemento(evento.target.value)} maxLength="50" id="cadastroComplemento"/>
                
                <LabelTelaDeCadastro nome="Bairro" for="cadastroBairro"/>
                <InputTelaDeCadastro value={valorInputBairro} onChange={evento => setValorInputBairro(evento.target.value)} maxLength="40" id="cadastroBairro"/>
                
                <LabelTelaDeCadastro nome="Cidade" for="cadastroCidade"/>
                <InputTelaDeCadastro value={valorInputCidade} onChange={evento => setValorInputCidade(evento.target.value.replace(/[^a-zA-ZÀ-ÿ ]/gu, ''))} maxLength="30" id="cadastroCidade"/>
                
                <LabelTelaDeCadastro nome="UF" for="cadastroEstado"/>
                <InputTelaDeCadastro value={valorInputUf} onChange={evento => setValorInputUf(evento.target.value.replace(/[^a-zA-ZÀ-ÿ ]/gu, ''))} maxLength="2" minLength="2" id="cadastroEstado"/>
                
                <button className="font-archivo border-2 mt-4 p-2 bg-color4 rounded" type="submit" id="btnRealizarCadastro">Realizar cadastro</button>
                {mensagemFormularioEnviado && <p className="absolute font-bold font-archivo bottom-[40px] left-[150px] text-lg">Cadastro realizado com sucesso!</p>}
                </form>
            </div>
        </div>
    )
}

export default TelaDeCadastro