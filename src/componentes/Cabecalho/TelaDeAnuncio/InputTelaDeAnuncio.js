const InputTelaDeAnuncio = (props) => {
    return (
        <input name={props.name} value={props.value} onChange={props.onChange} className={`w-48 rounded mb-4 outline-none px-2 py-1 font-bold font-archivo ${props.classe} informacaoCarro`}
            required minLength={props.minLength} maxLength={props.maxLength} id={props.id} />
    )
}

export default InputTelaDeAnuncio