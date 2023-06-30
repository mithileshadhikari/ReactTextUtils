import React, { useState } from "react";

export default function TextForm(props) {
const handleUpperCase=()=>{
    //console.log("uppercase clicked");
    let newText=text.toUpperCase();
    setText(newText);
    
}

const handlelowerCase=()=>{
    let newText=text.toLowerCase();
    setText(newText)

}
const handlecapitalkCase=()=>{
  let newText=text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();
  setText(newText)

}
const clear=()=>{
  let newText="";
  setText(newText)

}


const handleOnChange=(event)=>{
    //console.log("onchange click");
    setText(event.target.value)
}

  const [text, setText] = useState('');

  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
      <h1 className="mt-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="=mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpperCase}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handlelowerCase}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-3" onClick={handlecapitalkCase}>Convert to Capetalizecase</button>
      <button className="btn btn-primary mx-3" onClick={clear}>Clear</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
