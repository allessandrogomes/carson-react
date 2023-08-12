const InputAnoEPreco = (props) => {
    return (
        <div>
            <input
                value={props.value}
                onChange={props.onChange}
                className="mb-2 inputAno border border-color1 rounded-full w-24 h-8 font-archivo text-font-10px p-3 outline-none mr-4"
                placeholder={props.placeholder} type="text" pattern="\d*" maxLength={props.maxLength} id={props.id}
                inputMode="numeric" />
            <h5 className="text-left text-font-10px text-color1 font-archivo">{props.h5}</h5>
        </div>
    )
}

export default InputAnoEPreco