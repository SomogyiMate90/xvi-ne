
export default function getAncorPhoneNume(elseValidNum){

    if(typeof elseValidNum !== 'string') return;

    const numText = elseValidNum.replaceAll(RegExp(/\D/g),"")

    const ancorPhoneNum = `tel:+${numText}`

    return ancorPhoneNum;

}