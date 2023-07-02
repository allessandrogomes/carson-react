function TelaEsqueciMinhaSenha() {
    return (
        <div className="hidden flex flex-col items-center fixed rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-width-400px h-96 bg-teal-400 p-5" id="telaEsqueciMinhaSenha">
            <span className="w-8 absolute top-2.5 right-2.5 cursor-pointer" id="fecharTelaEsqueciMinhaSenha"><img src="./imagens/Main/botao-fechar.png" alt="Botão fechar tela de Login"/></span>
            <h2 className="font-bold font-archivo text-black text-center mb-2 mt-4 text-2xl">Recuperação de senha</h2>
            <h3 className="font-archivo text-center text-xs mb-6 w-3/4">Por favor, insira o seu endereço de e-mail no campo abaixo e clique em "Enviar". Certifique-se de fornecer o e-mail correto, pois enviaremos todas as informações necessárias para esse endereço.</h3>
            <div className="flex flex-col mb-5 text-left">
                <label className="w-48 font-bold font-archivo mr-2 text-sm" htmlFor="emailRecuperarSenha">Email</label>
                <input id="emailRecuperarSenha" className="w-48 rounded mb-4 outline-none px-2 py-1 text-sm font-archivo" type="email"/>
            </div>
            <button className="font-archivo border-2 p-2 bg-color4 rounded" id="btnRealizarCadastro">Enviar</button>
        </div>
    )
}

export default TelaEsqueciMinhaSenha