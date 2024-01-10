import React, { useState } from "react";

export default function TextForm(props) {
  let [text, setText] = useState("");
  const handleUpper = () => {
    setText(text.toLocaleUpperCase());
  };
  const handleLower = () => {
    setText(text.toLocaleLowerCase());
  };
  const stateChange = (event) => {
    setText(event.target.value);
  };
  const handleJsx = () => {
    let temp = text;
    let replaceJsx = {
      "<br>": "<br/>",
      "<hr>": "<hr/>",
      " for=": " htmlFor=",
      " class=": " className=",
    };
    for (const key in replaceJsx) {
      temp = temp.replaceAll(key, replaceJsx[key]);
    }
    temp = temp.split("<input ");
    temp.forEach((element, index) => {
      if (index > 0) {
        temp[index] = element.replace(">", "/>");
      }
    });
    temp = temp.join("<input ");
    setText(temp);
  };

  return (
    <>
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label>
        <textarea className="form-control" value={text} onChange={stateChange} rows={props.rows}></textarea>
      </div>
      <button type="button" onClick={handleUpper} className="btn btn-primary mx-3">Uppercase</button>
      <button type="button" onClick={handleLower} className="btn btn-primary mx-3">Lowercase</button>
      <button type="button" onClick={handleUpper} className="btn btn-primary mx-3">Title Case</button>
      <button type="button" onClick={handleUpper} className="btn btn-primary mx-3">Capitalize</button>
      <button type="button" onClick={handleJsx} className="btn btn-primary mx-3">Convert to JSX</button>
    </div>
    <div className="container my-4">
        <h3>Summary of Your Text</h3>
        <h6>Word Count {text.length && text.split(" ").length} Characters {text.length}</h6><br/>
        <h6>Preview :</h6>
        <p>{text}</p>
    </div>
    </>
  );
}
