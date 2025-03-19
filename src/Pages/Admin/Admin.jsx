
import { useIsLog } from "../../Functions/contexts/isLogConTexr";
import LoginForm from "./elements/LoginForm";


const Admin = () =>{

    const { isLog} = useIsLog()



    let seletedComp;

    if(!isLog){
        seletedComp = <LoginForm/>
    }
    else{
        seletedComp = <h1>Sikeres Bejelentkezés</h1>
    }



    return(
        <div>
   
            {
                seletedComp
            }
        </div>
    )


}

export default Admin;