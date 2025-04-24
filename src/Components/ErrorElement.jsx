import LinkBTN from "../shared/LinkBTN";


const ErrorElement = () =>{
    return(
        <div className="error-elment">
            <h2>Sajnáljuk! Valami hiba történt.</h2>


            <LinkBTN text='Vissza a főoldalra' url= '/' />
        </div>
    )

}

export default ErrorElement;