const SessaoCarros = ({carrosAMostrar}) => {
    return (
        <section className="flex justify-around flex-wrap" id="sessao-carros">
            {carrosAMostrar.length == 0 ? <h3>Não existe nenhum veículo dentre os pré-requisitos selecionados.</h3> : carrosAMostrar.map(carro => {
                return (
                    <div className="carro w-56 m-1 mb-10" key={carro.nome}>
                            <div className="mb-2 rounded-borde-radius-32px w-56 h-32 bg-no-repeat bg-cover"
                                style={{backgroundImage: `url(${carro.imagem})`}}>
                            </div>
                        <div className="flex text-left">
                            <div className="w-px h-50 bg-color3"></div>
                            <div>
                                <h3 className="nomeCarro ml-4 uppercase mb-1 text-base font-archivo font-bold text-color2">{carro.nome}</h3>
                                <h4 className="ml-4 mb-1 text-lg font-bold font-big-shoulders-display">R$ {carro.preco}</h4>
                                <div className="flex mb-3">
                                    <h4 className="ml-4 mr-6 font-archivo text-sm">{carro.ano}&#47;{carro.ano}</h4>
                                    <h4 className="font-archivo text-sm">{carro.km}km</h4>
                                </div>
                                <h4 className="ml-4 mb-4 font-archivo text-sm capitalize">{carro.cidade} - <span className="estadoCarro uppercase">{carro.estado}</span></h4>
                                <button
                                    className="text-color1 font-bold font-archivo ml-4 px-14 py-2 rounded-borde-radius-32px border border-color3">Comprar</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default SessaoCarros