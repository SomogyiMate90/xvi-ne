
import { useIsLog } from "../../Functions/contexts/isLogConTexr";
import EditingForm from "./elements/EditingForm";
import LoginForm from "./elements/LoginForm";


const Admin = () =>{

    const { isLog} = useIsLog()



    let seletedComp;

    if(!isLog){
        seletedComp = <LoginForm/>
    }
    else{
        seletedComp = <EditingForm/>
    }



    return(
        <div className="page-admin">
   
            {
                seletedComp
            }
        </div>
    )


}

export default Admin;