const DefaultFigure = ({props}) => {

   const {imgSrc, imgAlt } = props

  return (
    <figure>
        <img
          src={imgSrc}
          alt={imgAlt ?? "Az eseményhez kapcsolodó kép"}
        />
      <figcaption className="text-center">{imgAlt ?? ""}</figcaption>
    </figure>
  );
};

export default DefaultFigure;
