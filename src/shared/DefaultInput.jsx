
const DefaultInput = ({
    givenLabelText,
    inputProps,
    defaultValue = null,
    fun = {}
})=>{

 const {labelText, ...other} = inputProps



    return(
        <div className="mb-3">
            <label htmlFor={inputProps.id}>{labelText || givenLabelText}</label>
            <input 
                name={inputProps.id} 
                {...{className: 'form-control ',type:'text', ...other}}
                defaultValue={defaultValue ?? '' }                
                {...fun}
            />
        </div>
    )


}

export default DefaultInput