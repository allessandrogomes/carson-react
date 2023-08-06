import { useState } from "react"
import InputTelaDeCadastro from "./InputTelaDeCadastro"
import LabelTelaDeCadastro from "./LabelTelaDeCadastro"

const TelaDeCadastro = ({ aoClicarNoX }) => {

    const [valorInputNomeCompleto, setValorInputNomeCompleto] = useState('')
    const [valorInputContato, setValorInputContato] = useState('')
    const [valorInputCep, setValorInputCep] = useState('')
    const [valorInputNumeroDaCasa, setValorInputNumeroDaCasa] = useState('')
    const [valorInputCidade, setValorInputCidade] = useState('')
    const [valorInputUf, setValorInputUf] = useState('')

    const formatacaoContato = (evento) => {
        const contato = evento.target.value.replace(/\D/g, '')

        if (contato.length === 11) {
            setValorInputContato(`(${contato.slice(0, 2)}) ${contato.slice(2, 7)}-${contato.slice(7)}`)
        } else {
            setValorInputContato(contato)
        }
    }

    return (
        <div id="telaDeCadastro" className="flex gap-10 flex-col items-center fixed rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-width-600px h-600 bg-teal-400 p-5">
            <span onClick={aoClicarNoX} className="w-8 absolute top-2.5 right-2.5 cursor-pointer" id="fecharTelaDeCadastro"><img src="./imagens/Main/botao-fechar.png" alt="Botão fechar tela de Login"/></span>
            <h2 className="font-bold font-archivo text-black text-center mb-2 mt-4 text-2xl">Cadastro</h2>
            <div className="w-11/12 h-3/4">
                <form id="formCadastro" action="#" className="flex h-full w-full flex-col flex-wrap text-left">
                <LabelTelaDeCadastro nome="Nome completo" for="cadastroNomeCompleto"/>
                <InputTelaDeCadastro value={valorInputNomeCompleto} onChange={evento => setValorInputNomeCompleto(evento.target.value.replace(/[^a-zA-ZÀ-ÿ ]/gu, ''))} maxLength="50" id="cadastroNomeCompleto"/>

                <LabelTelaDeCadastro nome="Nascimento" for="cadastroNascimento"/>
                <InputTelaDeCadastro id="cadastroNascimento" type="date"/>

                <LabelTelaDeCadastro nome="Contato" for="cadastroContato"/>
                <InputTelaDeCadastro value={valorInputContato} onChange={formatacaoContato} maxLength="11" minLength="11" id="cadastroContato" placeholder="(xx) xxxxx-xxxx"/>

                <LabelTelaDeCadastro nome="Email" for="cadastroEmail"/>
                <InputTelaDeCadastro id="cadastroEmail" maxLength="50" type="email"/>

                <LabelTelaDeCadastro nome="CEP" for="cadastroCep"/>
                <InputTelaDeCadastro value={valorInputCep} onChange={evento => setValorInputCep(evento.target.value.replace(/\D/g, ''))} id="cadastroCep" type="text" placeholder="" maxLength="8" minLength="8"/>

                <div className="absolute top-73.7" id="erroCep"></div>

                <LabelTelaDeCadastro nome="Endereço" for="cadastroEndereco"/>
                <InputTelaDeCadastro maxLength="40" id="cadastroEndereco"/>
                
                <LabelTelaDeCadastro nome="N° da casa" for="cadastroNumeroDaCasa"/>
                <InputTelaDeCadastro value={valorInputNumeroDaCasa} onChange={evento => setValorInputNumeroDaCasa(evento.target.value.replace(/\D/g, ''))} maxLength="6" id="cadastroNumeroDaCasa"/>
                
                <LabelTelaDeCadastro nome="Complemento" for="cadastroComplemento"/>
                <InputTelaDeCadastro maxLength="50" id="cadastroComplemento"/>
                
                <LabelTelaDeCadastro nome="Bairro" for="cadastroBairro"/>
                <InputTelaDeCadastro maxLength="40" id="cadastroBairro"/>
                
                <LabelTelaDeCadastro nome="Cidade" for="cadastroCidade"/>
                <InputTelaDeCadastro value={valorInputCidade} onChange={evento => setValorInputCidade(evento.target.value.replace(/[^a-zA-ZÀ-ÿ ]/gu, ''))} maxLength="30" id="cadastroCidade"/>
                
                <LabelTelaDeCadastro nome="UF" for="cadastroEstado"/>
                <InputTelaDeCadastro value={valorInputUf} onChange={evento => setValorInputUf(evento.target.value.replace(/[^a-zA-ZÀ-ÿ ]/gu, ''))} maxLength="20" id="cadastroEstado"/>
                
                <button className="font-archivo border-2 mt-4 p-2 bg-color4 rounded" id="btnRealizarCadastro">Realizar cadastro</button>
                </form>
            </div>
        </div>
    )
}

export default TelaDeCadastro