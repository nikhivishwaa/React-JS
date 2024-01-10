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

  let styling = {color: props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'rgb(51 53 62)'};

  return (
    <>
    <div className="container" style={styling}>
    <h3>Welcome to Sigma Text Analyzer</h3>
      <div className="mb-3">
        <textarea className="form-control my-3" value={text} placeholder={props.label} onChange={stateChange} rows={props.rows}  style={{color: props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'rgb(51 53 62)'}}></textarea>
      </div>
      <button type="button" onClick={handleUpper} className="btn btn-primary mx-3">Uppercase</button>
      <button type="button" onClick={handleLower} className="btn btn-primary mx-3">Lowercase</button>
      <button type="button" onClick={handleUpper} className="btn btn-primary mx-3">Title Case</button>
      <button type="button" onClick={handleUpper} className="btn btn-primary mx-3">Capitalize</button>
      <button type="button" onClick={handleJsx} className="btn btn-primary mx-3">Convert to JSX</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'rgb(51 53 62)'}}>
        <h4>Summary of Your Text</h4>
        <h6>Word Count : {text.length && text.split(" ").length} &nbsp; | &nbsp; Characters {text.length}</h6><br/>
        <h6>Preview :</h6>
        <p>{text.length?text:"Enter some text in the above field to preview here"}</p>
    </div>
    </>
  );
}
