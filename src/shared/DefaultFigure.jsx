const DefaultFigure = ({props ={}, classStyle , children }) => {

   const {imgSrc = '', imgAlt } = props;

  //  if(!imgSrc) return;

  let SelectedComp;

  if( imgSrc.length){
    SelectedComp = (
      <img
      src={imgSrc}
      alt={imgAlt ?? "Az eseményhez kapcsolodó kép"}
    />
    )
  }

  else{
    SelectedComp = children
  }

  return (
    <figure className={classStyle}>
      {SelectedComp}
      <figcaption className="text-center fst-italic fw-light">{imgAlt ?? "Nincs képleírás"}</figcaption>
    </figure>
  );
};

export default DefaultFigure;
