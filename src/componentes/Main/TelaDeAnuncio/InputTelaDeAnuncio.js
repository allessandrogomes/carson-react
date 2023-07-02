function InputTelaDeAnuncio(props) {
    return (
        <input className={`w-48 rounded mb-4 outline-none px-2 py-1 font-bold font-archivo ${props.classe} informacaoCarro`}
            required maxLength={props.maxLength} id={props.id} />
    )
}

export default InputTelaDeAnuncio