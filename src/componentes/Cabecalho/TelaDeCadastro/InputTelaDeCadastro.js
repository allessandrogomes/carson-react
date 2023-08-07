function InputTelaDeCadastro(props) {
    return (
        <input value={props.value} onBlur={props.onBlur} onChange={props.onChange} className={`${props.border ? 'border' : ''} border-red-700 mb-4 w-5/12 outline-none rounded font-archivo px-2 py-1 inputCadastro`} id={props.id} type={props.type} placeholder={props.placeholder} 
        maxLength={props.maxLength} minLength={props.minLength} max={props.max} required/>
    )
}

export default InputTelaDeCadastro