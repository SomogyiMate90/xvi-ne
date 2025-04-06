const DefaultTextArea = ({ labelText, inputProps, defaultValue = null }) => {
  return (
    <div className="mb-3 form-control">
      <label className="mb-3" htmlFor={inputProps.id}>{labelText}</label>
      <textarea
        name={inputProps.id}
        {...{ className: "form-control ", type: "text",rows : 10, ...inputProps }}
        defaultValue={defaultValue ?? ""}
      ></textarea>
    </div>
  );
};

export default DefaultTextArea;
