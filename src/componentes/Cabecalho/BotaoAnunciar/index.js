import { useState } from "react"
import TelaDeAnuncio from "../TelaDeAnuncio"
import FundoDesfocado from "../FundoDesfocado"

const BotaoAnunciar = ({ onClick }) => {

    // const [telaDeAnuncioVisivel, setTelaDeAnuncioVisivel] = useState(false)

    // const toggleTelaDeAnuncio = () => {
    //     setTelaDeAnuncioVisivel((prevState) => !prevState)
    // }
    
    return (
        <div>
            <button
            // onClick={toggleTelaDeAnuncio}
            onClick={onClick}
            className="zIndex navListLi bg-white h-12 w-32 rounded-full text-teal-400 font-bold hover:text-teal-500 transition delay-75 ease-in-out" 
            id="botaoAnunciar">
            Anunciar
            </button>
            {/* {telaDeAnuncioVisivel && (
                    <>
                        <FundoDesfocado />
                        <TelaDeAnuncio aoClicarNoX={toggleTelaDeAnuncio}/>
                    </> 
                )
            } */}
        </div> 
    )
}

export default BotaoAnunciar