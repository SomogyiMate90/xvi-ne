
const ImgHTML = ({style='', src = '',picAlt = ''}) =>{

    let valdidSrc;
    let validPicAlt;
    const noImgSrc = '/assets/img/no-img.png';

    if(typeof src !== 'string' || src === ''){
        valdidSrc = noImgSrc;
        validPicAlt = 'Nincs kép feltöltve';
    }
    else{
        valdidSrc = src;
        validPicAlt = picAlt
    }
       

    return(
    <img className={style} src={valdidSrc} alt={validPicAlt}/>
    )
}

export default ImgHTML;