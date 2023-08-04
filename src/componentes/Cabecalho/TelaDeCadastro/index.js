import InputTelaDeCadastro from "./InputTelaDeCadastro"
import LabelTelaDeCadastro from "./LabelTelaDeCadastro"

const TelaDeCadastro = ({ aoClicarNoX }) => {
    return (
        <div id="telaDeCadastro" className="flex gap-10 flex-col items-center fixed rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-width-600px h-600 bg-teal-400 p-5">
            <span onClick={aoClicarNoX} className="w-8 absolute top-2.5 right-2.5 cursor-pointer" id="fecharTelaDeCadastro"><img src="./imagens/Main/botao-fechar.png" alt="Botão fechar tela de Login"/></span>
            <h2 className="font-bold font-archivo text-black text-center mb-2 mt-4 text-2xl">Cadastro</h2>
            <div className="w-11/12 h-3/4">
                <form id="formCadastro" action="#" className="flex h-full w-full flex-col flex-wrap text-left">
                <LabelTelaDeCadastro nome="Nome completo" for="cadastroNomeCompleto"/>
                <InputTelaDeCadastro id="cadastroNomeCompleto"/>

                <LabelTelaDeCadastro nome="Nascimento" for="cadastroNascimento"/>
                <InputTelaDeCadastro id="cadastroNascimento" type="date"/>

                <LabelTelaDeCadastro nome="Contato" for="cadastroContato"/>
                <InputTelaDeCadastro id="cadastroContato" placeholder="(xx) xxxxx-xxxx"/>

                <LabelTelaDeCadastro nome="Email" for="cadastroEmail"/>
                <InputTelaDeCadastro id="cadastroEmail" type="email"/>

                <LabelTelaDeCadastro nome="CEP" for="cadastroCep"/>
                <InputTelaDeCadastro id="cadastroCep" type="text" placeholder="" maxLength="8" minLength="8"/>

                <div className="absolute top-73.7" id="erroCep"></div>

                <LabelTelaDeCadastro nome="Endereço" for="cadastroEndereco"/>
                <InputTelaDeCadastro id="cadastroEndereco"/>
                
                <LabelTelaDeCadastro nome="N° da casa" for="cadastroNumeroDaCasa"/>
                <InputTelaDeCadastro id="cadastroNumeroDaCasa"/>
                
                <LabelTelaDeCadastro nome="Complemento" for="cadastroComplemento"/>
                <InputTelaDeCadastro id="cadastroComplemento"/>
                
                <LabelTelaDeCadastro nome="Bairro" for="cadastroBairro"/>
                <InputTelaDeCadastro id="cadastroBairro"/>
                
                <LabelTelaDeCadastro nome="Cidade" for="cadastroCidade"/>
                <InputTelaDeCadastro id="cadastroCidade"/>
                
                <LabelTelaDeCadastro nome="UF" for="cadastroEstado"/>
                <InputTelaDeCadastro id="cadastroEstado"/>
                
                <button className="font-archivo border-2 mt-4 p-2 bg-color4 rounded" id="btnRealizarCadastro">Realizar cadastro</button>
                </form>
            </div>
        </div>
    )
}

export default TelaDeCadastro