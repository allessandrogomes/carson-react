const BotaoChat = ({ onClick }) => {
    return (
        <div id="btnAbrirChat" className="zIndex navListLi flex w-[100px] h-10 items-center justify-around">
            <h5 onClick={onClick} className="text-white font-normal cursor-pointer hover:font-medium transition delay-75 ease-in-out">Chat
            </h5>
            <img onClick={onClick} className="h-10 cursor-pointer" src="./imagens/Cabecalho/chat.svg" alt="Imagem Chat"/>
        </div> 
    )
}

export default BotaoChat