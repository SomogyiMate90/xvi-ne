/**
 * 
 * @param {string} text 
 */
export default function validPhonNum(text){

    const digits = text.replace(/\D/g, '');

    if(digits.length < 6 ) return 'Nincs telefonszám'

    let validPhoneNumber;

    if(digits.charAt(2) === 1){
        const part1 = digits.slice(0, 2) == '06' ? '+36' : digits.slice(0, 2);
        const part2 = digits.slice(2, 3);
        const part3 = digits.slice(3,6);
        const part4 = digits.slice(6);
        validPhoneNumber = `${part1}/${part2}-${part3}-${part4}`;
       
    }
    else{
        const part1 = digits.slice(0, 2) == '06' ? '+36' : digits.slice(0, 2);
        const part2 = digits.slice(2, 4);
        const part3 = digits.slice(4,7);
        const part4 = digits.slice(7);
        validPhoneNumber = `${part1}/${part2}-${part3}-${part4}`;
    }

    return validPhoneNumber;
}