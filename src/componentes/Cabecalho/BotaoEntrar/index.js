const BotaoEntrar = ({ onClick }) => {
    return (
        <div>
            <div className="zIndex navListLi flex gap-2 w-[100px] h-10 items-center justify-around" id="botaoLogin">
                <h5 onClick={onClick} className="text-white font-normal cursor-pointer hover:font-medium transition delay-75 ease-in-out">
                    Entrar</h5>
                <img onClick={onClick} className="h-10 cursor-pointer" src="./imagens/Cabecalho/entrar.svg" alt="Imagem Chat"/>
            </div>
        </div>
    )
}

export default BotaoEntrar