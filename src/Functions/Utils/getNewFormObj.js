import validPhonNum from "./validPhonNum";

/**
 * 
 * @param {Event} event 
 */
export default function getNewFormObj(event){
    event.preventDefault();

    if(!(event.target instanceof HTMLFormElement)) return;
    else{

        const formData = new FormData(event.target);
        const formEntries = Array.from(formData.entries());

        const formObj = formEntries.reduce((acc,item)=>{

            const [key, value] = item;

            if(key === "phoneNumber"){

                const phoneNum = validPhonNum(value);
                acc[key] = phoneNum
            }
            else if(key === "picture"){
                return acc;
            }
            else{
                acc[key] = value
            }

            return acc;
        },{})
        // console.log(formObj);
        return formObj;
    }
}