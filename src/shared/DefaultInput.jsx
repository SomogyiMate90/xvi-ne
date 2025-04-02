
const DefaultInput = ({
    labelText,
    inputProps,
    defaultValue = null
})=>{


    return(
        <div className="mb-3">
            <label htmlFor={inputProps.id}>{labelText}</label>
            <input 
                name={inputProps.id} 
                {...{className: 'form-control ',type:'text', ...inputProps}}
                defaultValue={defaultValue ?? '' }                
             
            />
        </div>
    )


}

export default DefaultInput