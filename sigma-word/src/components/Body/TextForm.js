import React, { useState } from "react";

export default function TextForm(props) {
  let [text, setText] = useState("");
  const handleUpper = () => {
    setText(text.toLocaleUpperCase());
    props.alert("converted to uppercase", "success");
  };
  const handleLower = () => {
    setText(text.toLocaleLowerCase());
    props.alert("converted to lowercase", "success");
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
        if (element[element.search(">") - 1] !== "/") {
          temp[index] = element.replace(">", "/>");
        }
      }
    });
    temp = temp.join("<input ");
    setText(temp);
    props.alert("converted to JSX", "success");
  };

  const handleApplyRouter = () => {
    let temp = text;
    let replaceJsx = {
      " href=": " to=",
      "<a ": "<NavLink ",
      "</a>": "</NavLink>",
    };
    for (const key in replaceJsx) {
      temp = temp.replaceAll(key, replaceJsx[key]);
    }
    setText(temp);
    props.alert("converted syntax from a-href to NavLink-to", "success");
  };
  let styling = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "rgb(51, 53, 62)",
  };

  let wordArray = text.split(/\s+|\n/g).filter((elem) => elem.length !== 0);
  const handleTitle = () => {
    let regex = /\s+[a-z]/g;
    const title = (str) => {
      let x = str.search(regex);
      x += str.slice(x).search(/[a-zA-z]/g);
      if (x > -1) {
        return (
          str.slice(0, x) +
          str.charAt(x).toUpperCase() +
          title(str.slice(x + 1))
        );
      }
      return str;
    };
    let caps = title(text);;
    setText(caps.charAt(0).toUpperCase() + caps.slice(1));
    props.alert("converted to Title", "success");
  };
  const handleExtraSpaces = () => {
    let wordArray = text.split(" ").filter((elem) => elem.length !== 0);
    setText(wordArray.join(" "));
    props.alert("removed extra spaces", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.alert("text copied to clipboard", "success");
  };
  let empty = text.length === 0 ? true : false;

  return (
    <>
      <div className="container" style={styling}>
        <h3>
          Try Sigma Word - JSX Converter, Modify Text(Lowercase, Uppercase,
          Title ..etc.){" "}
        </h3>
        <div className="mb-3">
          <textarea
            className="form-control my-3 txtarea"
            value={text}
            placeholder={props.label}
            onChange={stateChange}
            rows={props.rows}
            style={styling}
          ></textarea>
        </div>
        <button
          disabled={empty}
          type="button"
          onClick={handleUpper}
          className="btn btn-primary mx-3 my-1"
        >
          Uppercase
        </button>
        <button
          disabled={empty}
          type="button"
          onClick={handleLower}
          className="btn btn-primary mx-3 my-1"
        >
          Lowercase
        </button>
        <button
          disabled={empty}
          type="button"
          onClick={handleTitle}
          className="btn btn-primary mx-3 my-1"
        >
          Title Case
        </button>
        <button
          disabled={empty}
          type="button"
          onClick={handleExtraSpaces}
          className="btn btn-primary mx-3 my-1"
        >
          Remove Whitespace
        </button>
        <button
          disabled={empty}
          type="button"
          onClick={handleJsx}
          className="btn btn-primary mx-3 my-1"
        >
          Convert to JSX
        </button>
        <button
          disabled={empty}
          type="button"
          onClick={handleApplyRouter}
          className="btn btn-primary mx-3 my-1"
        >
          JSX NavLink to
        </button>
        <button
          disabled={empty}
          type="button"
          onClick={handleCopy}
          className="btn btn-primary mx-3 my-1"
        >
          Copy Text
        </button>
      </div>
      <div className="container my-4" style={styling}>
        <h4>Summary of Your Text</h4>
        <h6>
          Word Count : {wordArray.length} &nbsp; | &nbsp; Characters{" "}
          {text.length}
        </h6>
        <br />
        <h6>Preview :</h6>
        <p>{text.length ? text : "Nothing to preview here"}</p>
      </div>
      <style>
        {props.mode === "dark"
          ? `.txtarea::placeholder { 
              color: #e6e6e6; 
          }`
          : ""}
      </style>
    </>
  );
}
