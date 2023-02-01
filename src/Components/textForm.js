import React, { useState } from "react";

export default function TextForm(prop) {
  const [text, setText] = useState('');
 
  function changeToUpperCase() {  
    let newtext = text.toUpperCase();
    setText(newtext);
    prop.showAlert('info','Text Change to Upper Case')
  }
  function changeToLowerCase() {  
    let newtext = text.toLowerCase();
    setText(newtext);
    prop.showAlert('info','Text Change to Lower Case')
  }
  function changeToClear() {  
    setText('');
    prop.showAlert('info','Text is clear now')
  }
  function handletext(event) {
    setText(event.target.value);
  }
  
  return (
    <>
  
      <div className="container mb-3" style={{color : prop.mode==='dark'?'white':'black'}}>
        <label  className="form-label">
          {prop.fieldname}
        </label>
        <textarea
          className="form-control" 
          id="exampleFormControlTextarea1"
          value={text}
            onChange={handletext}
          rows="8" 
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={changeToUpperCase}>Convert to Upper Case</button>
      <button className="btn btn-secondary mx-2" onClick={changeToLowerCase}>Convert to Upper Case</button>
      <button className="btn btn-info mx-2" onClick={() => {
         navigator.clipboard.writeText(text);
    prop.showAlert('info','Text is copy in clipboard')
         
         }}>Copy text</button>
      <button className="btn btn-danger mx-2" onClick={changeToClear}>Clear</button>
      <div className="container my-3" style={{color : prop.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h3>Preview : </h3>
        <p>{text.length>0?text:"Enter something in the text above to preview it here"}</p>
      </div>
    </>
  );
}
