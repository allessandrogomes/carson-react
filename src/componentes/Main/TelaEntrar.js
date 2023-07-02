function TelaEntrar() {
    return (
        <div id="telaEntrar" className="hidden text-left flex flex-col items-center fixed rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-width-400px h-96 bg-teal-400 p-5">
            <span className="w-8 absolute top-2.5 right-2.5 cursor-pointer" id="fecharTelaDeLogin"><img src="./imagens/Main/botao-fechar.png" alt="Botão fechar tela de Login"/></span>
            <h2 className="font-bold font-archivo text-black text-center mb-2 mt-4 text-2xl">Login</h2>
            <h3 className="font-archivo text-center text-xs underline mb-6 cursor-pointer" id="btnCadastrar">Não possuo cadastro</h3>
            <div className="flex flex-col">
                <label className="w-48 font-bold font-archivo mr-2 text-sm" htmlFor="emailEntrar">Email</label>
                <input id="emailEntrar" className="w-48 rounded mb-4 outline-none px-2 py-1 text-sm font-archivo" type="email"/>
            </div>
            <div className="flex flex-col mb-10">
                <label className="w-48 font-bold font-archivo mr-2 text-sm" htmlFor="senhaEntrar">Senha</label>
                <input id="senhaEntrar" className="w-48 rounded outline-none mb-1 px-2 py-1 text-sm font-archivo" type="password"/>
                <p id="btnEsqueciMinhaSenha" className="font-archivo text-xs cursor-pointer underline">Esqueci minha senha</p>
            </div>
            <button className="font-archivo border-2 p-3 bg-color4 rounded">Entrar</button>
        </div>
    )
}

export default TelaEntrar