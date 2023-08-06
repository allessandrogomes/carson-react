const BotaoAnunciar = ({ onClick }) => {    
    return (
        <div>
            <button
            onClick={onClick}
            className="zIndex navListLi bg-white h-12 w-32 rounded-full text-teal-400 font-bold hover:text-teal-500 transition delay-75 ease-in-out" 
            id="botaoAnunciar">
            Anunciar
            </button>
        </div> 
    )
}

export default BotaoAnunciar