const BtnGroup = ({btn=[]}) =>{



    return(
        <div className="d-flex justify-content-evenly">
            {btn.map((item,index)=>{

                const { text, type, inputProps , className } = item

                return(    
                    <button key={index}
                    className = {className}
                    { ...inputProps}
                    type={type ?? 'button'}
                    >
                    {text}
                    </button>    
                )
            })}
        </div>
    )
}

export default BtnGroup;