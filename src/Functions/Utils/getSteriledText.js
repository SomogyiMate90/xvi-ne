export default function getSteriledText(usersInputThing){

    const text = String(usersInputThing);

    const steriledText = text.replaceAll(new RegExp(/[^\w.@+!%/]/gi),'');

    // console.log(steriledText)

    return steriledText;
    
}

