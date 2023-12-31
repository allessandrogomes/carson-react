const TelaAnuncioPublicado = (props) => {
    return (
        <div id="telaAnuncioPublicado"
                className=" flex gap-6 flex-col items-center justify-center fixed rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-teal-400 p-5">
                <h2 className="h-8 font-bold font-archivo text-black text-center text-2xl">Seu anúncio foi publicado com
                    sucesso!</h2>
                <button onClick={props.onClickOk} id="btnAnunciarOk"
                    className="w-18 uppercase border-2 p-4 border-color1 bg-color4 text-color1 font-archivo font-bold">Ok</button>
        </div>
    )
}

export default TelaAnuncioPublicado