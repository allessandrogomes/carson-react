import { useState } from "react"

const TelaChat = ({ aoClicarNoX, visivel }) => {

    const [mensagens, setMensagens] = useState([])
    const [mensagemDigitada, setMensagemDigitada] = useState('')

    const armazenaMensagem = (evento) => {
        setMensagemDigitada(evento.target.value.trim())
    }

    const enviarMensagem = (evento) => {
        if (evento.key === 'Enter') {
            if (mensagemDigitada.length > 0) {
                const novaMensagemDeUsuario = 
                    <div key={mensagens.length} className="flex justify-end items-center m-2">
                        <p className="font-archivo bg-color3 p-2 rounded break-all max-w-[250px]">{mensagemDigitada}</p>
                        <img className="w-12% m-3" src="./imagens/Chat/icon-user.png" alt="Ícone usuário bot"/>
                    </div>
                setMensagens((prevMensagens) => [...prevMensagens, novaMensagemDeUsuario])
                setMensagemDigitada('')
                evento.target.value = ''
            } else {
                setMensagemDigitada('')
                evento.target.value = ''
            } 
        }
    }

    return (
        <div id="telaChat" className={`${visivel ? '' : 'hidden'} right-[0%] w-[470px] flex flex-col items-center fixed rounded top-1/2 h-1/2 bg-white`}>
            <span onClick={aoClicarNoX} className="w-8 absolute top-2.5 right-2.5 cursor-pointer" id="fecharTelaChat"><img src="./imagens/Main/botao-fechar.png" alt="Botão fechar tela de Login"/></span>
            <div className="flex items-center justify-center w-full h-16 bg-color2 rounded-t" id="topoChat">
                <h3 className="font-archivo font-bold text-white">CarsOn - Chat Online</h3>
            </div>
            <div id="chatMensagens" className="w-full h-4/6 bg-gray-100 overflow-y-auto">
                <div className="flex items-center m-2">
                    <img className="w-1/6" src="./imagens/Chat/icon-bot.png" alt="Ícone usuário bot"/>
                    <div className="font-archivo bg-color2 p-2 rounded"><p>Olá, em que posso ajudar?</p></div>            
                </div>
                {mensagens}
            </div>
            <div className="w-full h-1/6 rounded-b">
                <input onChange={armazenaMensagem} onKeyDown={enviarMensagem} id="inputMensagemChat" className="h-full w-10/12 outline-none p-2 rounded-b font-archivo" placeholder="Escreva sua mensagem" type="text"/>
                <img id="btnEnviarMensagemChat" className="absolute bottom-5 left-93 w-6 cursor-pointer" src="./imagens/Chat/icon-send-menssage.png" alt="Ícone enviar mensagem"/>
            </div>
        </div>
    )
}

export default TelaChat