function InputTelaDeCadastro(props) {
    return (
        <input className="mb-4 w-5/12 outline-none rounded font-archivo px-2 py-1 inputCadastro" id={props.id} type={props.type} placeholder={props.placeholder} 
        maxLength={props.maxLength} minLength={props.minLength} required/>
    )
}

export default InputTelaDeCadastro