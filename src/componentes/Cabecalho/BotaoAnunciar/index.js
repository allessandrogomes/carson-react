const BotaoAnunciar = ({ onClick, opacidadeNavLi }) => {    
    return (
        <div>
            <button
            onClick={onClick}
            className={`zIndex ${opacidadeNavLi} navListLi bg-white h-12 w-32 rounded-full text-teal-400 font-bold hover:text-teal-500 transition`}
            id="botaoAnunciar">
            Anunciar
            </button>
        </div> 
    )
}

export default BotaoAnunciar