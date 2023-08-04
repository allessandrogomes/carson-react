function LabelTelaDeCadastro(props) {
    return (
        <label className="font-bold font-archivo mr-2 text-sm" htmlFor={props.for}>{props.nome}</label>
    )
}

export default LabelTelaDeCadastro