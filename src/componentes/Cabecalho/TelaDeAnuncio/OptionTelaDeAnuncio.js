const OptionTelaDeAnuncio = (props) => {
    return (
        props.itens.map(marca => {
            return (
                <option key={marca} className="font-archivo capitalize" value={marca}>{marca}</option>
            )
        })
    )
}

export default OptionTelaDeAnuncio