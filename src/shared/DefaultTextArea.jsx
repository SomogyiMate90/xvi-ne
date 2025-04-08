const DefaultTextArea = ({ givenLabelText, inputProps, defaultValue = null }) => {

  const {labelText, ...other} = inputProps

  return (
    <div className="mb-3 form-control">
      <label className="mb-3" htmlFor={inputProps.id}>{labelText || givenLabelText}</label>
      <textarea
        name={inputProps.id}
        {...{ className: "form-control ", type: "text",rows : 10, ...other }}
        defaultValue={defaultValue ?? ""}
      ></textarea>
    </div>
  );
};

export default DefaultTextArea;
