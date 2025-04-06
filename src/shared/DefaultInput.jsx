
const DefaultInput = ({
    labelText,
    inputProps,
    defaultValue = null,
    fun = {}
})=>{





    return(
        <div className="mb-3">
            <label htmlFor={inputProps.id}>{labelText}</label>
            <input 
                name={inputProps.id} 
                {...{className: 'form-control ',type:'text', ...inputProps}}
                defaultValue={defaultValue ?? '' }                
                {...fun}
            />
        </div>
    )


}

export default DefaultInput