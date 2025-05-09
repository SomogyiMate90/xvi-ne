
export default function toConverStringAny(anything){

    // console.log(anything)
    // console.log(typeof anything)

    let converted;

    if(typeof anything === "string"){
        converted = anything
    }
    else if(Array.isArray(anything) ){
        converted = anything.join(", ")
    }
    else if(anything === null){
        converted = 'ÜRES MEZŐ VAGY NEM TARTALMAZ KÉPET !!!'
    }
    else if(Object.hasOwn(anything,'seconds')){
        // console.log('megtalálta a Secons objektumot')
        let seconds = 'seconds';
        const date = new Date(anything[seconds] * 1000)
        const localDateString = date.toLocaleString();
        const localDateIso = date.toISOString();
        converted = `${localDateString} - ISO Idő:  ${localDateIso}`;
    }
    else{
        converted = 'KÉPET VAGY EGYÉB ADATOT TARTALMAZ  (Nem történt átalakítás!)';
    }
    return converted;


}