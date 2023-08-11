const SessaoCarros = (props) => {
    return (
        <section className="flex justify-around flex-wrap" id="sessao-carros">
            {props.children}
        </section>
    )
}

export default SessaoCarros