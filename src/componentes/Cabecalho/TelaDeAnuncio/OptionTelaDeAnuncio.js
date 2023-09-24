const OptionTelaDeAnuncio = (props) => {
    return (
        props.itens.map(nome => {
            return (
                <option key={nome} className="font-archivo capitalize" value={nome.toLowerCase()}>{nome}</option>
            )
        })
    )
}

export default OptionTelaDeAnuncio