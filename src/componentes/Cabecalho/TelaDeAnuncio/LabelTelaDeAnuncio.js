const LabelTelaDeAnuncio = (props) => {
    return (
        <label className="w-48 font-bold font-archivo" htmlFor={props.for}>{props.nome}</label>
    )
}

export default LabelTelaDeAnuncio