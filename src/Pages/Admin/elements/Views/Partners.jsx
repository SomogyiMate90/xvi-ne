import DefaultInput from "../../../../shared/DefaultInput";
import DefaultInputImg from "../../../../shared/DefaultInputImg";
import { partnerek } from "./formsFileds";


const Partners = () =>{

    const {nev ,  url , base64Url} = partnerek

    return(
        <div>
            <form className="mb-3">
            <DefaultInput labelText='Partner neve' inputProps={nev}/>
            <DefaultInput labelText='Partner weboldal linkje' inputProps={url}/>
            <DefaultInputImg />
            </form>
        </div>

    )
}
export default Partners;