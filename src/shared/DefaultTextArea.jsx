import { useState } from "react";

const DefaultTextArea = ({ givenLabelText, inputProps, defaultValue = null }) => {
  const [characterLenght, setCharacterLenght] = useState(0);

  const {labelText, ...other} = inputProps

  /**
   * 
   * @param {Event} e 
   */
  function calcTextLenght(e){

    /**
     * @type {string}
     */
    const text = e.target.value;
    const lenght = text.length
    setCharacterLenght(lenght)
  }

  return (
    <div className="mb-3 form-control">
      <label className="mb-3" htmlFor={inputProps.id}>{labelText || givenLabelText}</label>
      <textarea
        name={inputProps.id}
        onChange={(e)=>calcTextLenght(e)}
        {...{ className: "form-control ", type: "text",rows : 10, ...other }}
        defaultValue={defaultValue ?? ""}
        ></textarea>
        <p className="text-primary">Karakter szám: <span>{characterLenght}</span></p>
    </div>
  );
};

export default DefaultTextArea;
