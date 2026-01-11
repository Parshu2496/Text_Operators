import React, { useState } from "react";

export default function TextForm(props) {
  const [text, usetext] = useState("");
  const [orignaltext, useoriginaltext] = useState("");
  function onchange(event) {
    usetext(event.target.value);
  }
  function handletransform(type) {
    switch (type) {
      case "convertUpcase":
        props.showAlert("Converted to Upper", "success");
        usetext(text.toUpperCase());
        break;
      case "convertlowcase":
        usetext(text.toLowerCase());
        props.showAlert("Converted to lower", "success");
        break;
      case "removespace":
        usetext(text.replaceAll(" ", ""));
        props.showAlert("All spaces removed", "success");
        break;
      case "removeedge":
        usetext(text.trim());
        props.showAlert("Edge spaces removed", "success");
        break;
      case "original":
        usetext(orignaltext);
        props.showAlert("Original showed", "success");
        break;
      case "saveoriginal":
        useoriginaltext(text);
        props.showAlert("Saved original", "success");
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className="container">
        <div
          className="inputbox mb-3"
          style={{ border: "2px groove black", borderRadius: "20px" }}
        >
          <h1 className="container p-3"> {props.text}</h1>
          <div className="container">
            <textarea
              className="form-control"
              placeholder="Enter your input"
              id="floatingTextarea"
              rows = "8"
              cols = "50"
              value={text}
              onChange={onchange}
            ></textarea>
            <b />
            <button
              className="btn btn-primary my-2"
              disabled={text.length === 0}
              onClick={() => {
                handletransform("saveoriginal");
              }}
            >
              Save this text before updating
            </button>
            <br />
            <button
              className="btn btn-primary my-2"
              disabled={text.length === 0}
              onClick={() => {
                handletransform("convertUpcase");
              }}
            >
              Convert to Uppercase
            </button>
            <br />
            <button
              className="btn btn-primary my-2"
              disabled={text.length === 0}
              onClick={() => {
                handletransform("convertlowcase");
              }}
            >
              Convert to Lowercase
            </button>
            <br />
            <button
              className="btn btn-primary my-2"
              disabled={text.length === 0}
              onClick={() => {
                handletransform("removespace");
              }}
            >
              Remove all spaces
            </button>
            <br />
            <button
              className="btn btn-primary my-2"
              disabled={text.length === 0}
              onClick={() => {
                handletransform("removeedge");
              }}
            >
              Remove space from start and end
            </button>
            <br />
            <button
              className="btn btn-primary my-2"
              disabled={text.length === 0}
              onClick={() => {
                handletransform("original");
              }}
            >
              Show original
            </button>
            <br />
          </div>
        </div>
        <div
          className="summarybox"
          style={{ border: "2px groove black", borderRadius: "20px" }}
        >
          <div className="container ">
            <h1>Your input summary: </h1>
            {text.trim() === "" ? (
              <p></p>
            ) : (
              <p>
                Words: {text.trim().split(/\s+/).length} <br></br>Characters:{" "}
                {text.trim().length} <br></br>Time to read:{" "}
                {0.08 * text.trim().split(/\s+/).length}
              </p>
            )}

            <h2>Preview</h2>
            {text === "" ? <p>Write something first!!</p> : <p>{text}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
