
const DefaultInput = ({
    givenLabelText,
    inputProps,
    defaultValue = null,
    fun = {}
})=>{

 const {labelText, required = false , value,  ...other} = inputProps

 const isControlled = value !== undefined && value !== false;

    return(
        <div className="mb-3">
            <label htmlFor={inputProps.id}>{labelText || givenLabelText}</label>
            <input 
                name={inputProps.id} 
                {...{className: 'form-control ',type:'text',  required, ...other}}
                {...(isControlled ? { value } : { defaultValue: defaultValue ?? '' })}        
                {...fun}
            />
        </div>
    )


}

export default DefaultInput