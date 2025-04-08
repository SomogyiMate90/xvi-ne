const DefaultFigure = ({props, classStyle}) => {

   const {imgSrc, imgAlt } = props

  return (
    <figure className={classStyle}>
        <img
          src={imgSrc}
          alt={imgAlt ?? "Az eseményhez kapcsolodó kép"}
        />
      <figcaption className="text-center">{imgAlt ?? ""}</figcaption>
    </figure>
  );
};

export default DefaultFigure;
