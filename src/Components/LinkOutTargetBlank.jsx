

const LinkOutTargetBlank = ({link}) =>{

    const {href , text} = link

    if( typeof href !== 'string' || typeof text !== 'string'){
        return null;
    }


    

    return(
        <a href={href} rel="noopener noreferrer" target="_blank">{text}</a>
    )
}

export default LinkOutTargetBlank;