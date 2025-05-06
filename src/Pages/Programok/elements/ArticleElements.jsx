
const ArticleElements = ({docContent}) =>{

    

    const { address, startTime , endTime  } = docContent;

    const startT = new Date(startTime);
    const endtT = new Date(endTime);


    return(
        <div className="artilce-elemets align-self-end border-top border-1 p-2 me-1 me-md-5">
                {
                   address && (<p className="text-indent-no">Cím: <span>{address}</span></p>)
                }
                     {
                   startTime && (
                    <p className="text-indent-no mb-0"><time dateTime={startT.toISOString()}>Kezdés: {startT.toLocaleString().slice(0,19) }
                    </time><br />
                  </p>
                   )}
                   
                   { endTime &&  (

                        <p className="text-indent-no"><time>Befejezés: {endtT.toLocaleString().slice(0,19) }</time>
                        </p>)
                }
        
      </div>
    )

}

export default ArticleElements;