function BotaoEntrar() {
    return (
        <div className="zIndex navListLi flex gap-2 w-[100px] h-10 items-center justify-around" id="botaoLogin">
            <h5 className="text-white font-normal cursor-pointer hover:font-medium transition delay-75 ease-in-out">
                Entrar</h5>
            <img className="h-10 cursor-pointer" src="./imagens/Cabecalho/entrar.svg" alt="Imagem Chat"/>
        </div>
    )
}

export default BotaoEntrar