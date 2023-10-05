const BotaoChat = ({ onClick, opacidadeNavLi }) => {
    return (
        <div id="btnAbrirChat" className={`navListLi ${opacidadeNavLi} flex w-[100px] h-10 items-center justify-around transition`}>
            <h5 onClick={onClick} className="text-white font-normal cursor-pointer hover:font-medium">Chat
            </h5>
            <img onClick={onClick} className="h-10 cursor-pointer" src="./imagens/Cabecalho/chat.svg" alt="Imagem Chat"/>
        </div> 
    )
}

export default BotaoChat