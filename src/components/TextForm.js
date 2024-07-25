import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", "success");
    }

    const handleLowClick = ()=>{
        console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case", "success");
    }

    const handleClear = ()=>{
        console.log("Clear");
        let newText = "";
        setText(newText)
        props.showAlert("Box is Empty Now", "success");
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
        
    }

    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode=== 'dark'?'white' : '#042743'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey' : 'white', color: props.mode=== 'dark'?'white' : '#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>

      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to Lowercase
      </button>

      <button className="btn btn-primary mx-2" onClick={handleClear}>
        Clear Text
      </button>

      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy Text
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark'?'white' : '#042743'}}>
        <h2>
            Your Text Summary
        </h2>
        <p>
            {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>
            {0.008 * text.split(" ").length} Minutes to read
        </p>
        <h2>
            Preview
        </h2>
        <p>
            {text.length>0?text:"Enter Something In The Above Box To Preview Here"}
        </p>

    </div>
    </>
  )
}
