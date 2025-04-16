const DefaultFigure = ({props, classStyle}) => {

   const {imgSrc, imgAlt } = props;

   if(!imgSrc) return;

  return (
    <figure className={classStyle}>
        <img
          src={imgSrc}
          alt={imgAlt ?? "Az eseményhez kapcsolodó kép"}
        />
      <figcaption className="text-center fst-italic fw-light">{imgAlt ?? ""}</figcaption>
    </figure>
  );
};

export default DefaultFigure;
