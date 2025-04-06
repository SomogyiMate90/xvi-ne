import LinkBTN from "../shared/LinkBTN";


const ErrorElement = () =>{
    return(
        <div className="error-elment">
            <h1>Sajnáljuk! Valami hiba történt</h1>


            <LinkBTN text='Vissza a főoldalra' url= '/' />
        </div>
    )

}

export default ErrorElement;