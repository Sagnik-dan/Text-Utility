import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick =()=>{
        let newText = '';
        setText(newText)
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!","success");
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
        
    }
    const[text, setText] = useState('');
    
  return (
    <>
    <div className="Container" style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
<div class="mb-3">
  <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'lightgrey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text Summary</h2>
    <p> {text.split(" ").length} <b>words</b> and {text.length} <b>characters</b></p>
    <p>{0.008 * text.split(" ").length} <b>Minutes to read required on average</b></p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Your entered text appears here as a preview"}</p>
    </div>
    </>
  )
}

