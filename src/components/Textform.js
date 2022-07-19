import React, { useState } from "react";

export default function textform(props) {
  const [text, setText] = useState("");

  // text = "Change the text" ---====>> this ia wornge way to change the state of text
  const handleUpClick = () => {

    // setText(text.toUpperCase());
    console.log("Clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {

    // setText(text.toUpperCase());
    console.log("Clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopy = () =>{
    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
  }
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}

  const handleOnChange = (event) => {
    let remText = text.replace(/ /g, "");
    let length = remText.length;
    console.log("On Change ");
    setText(event.target.value);
    // if (length<40){
    //   setText(event.target.value);
      
    // }
  };

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor:props.mode === 'dark'? 'grey':'white',color: props.mode==='dark'?'white':'black' }}  value={text} onChange={handleOnChange} id="myBox" rows="10" ></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convet to UpperCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>Convet to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>


      <div className="container " style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text summary </h1>
        <p>{text.split(" ").length} words and {text.length}  char </p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
  

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
      </div>


    </>
  );
}
