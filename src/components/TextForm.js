import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        props.showAlert("Text converted to UpperCase","success");
        setText(newText);
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        props.showAlert("Text converted to LowerCase","success");
        setText(newText);
    }
    const handleClear = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared","success");
    }
    const handleCopyText = () =>{
        var text = document.getElementById('myBox');
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied","success");
    }
    const handleRemoveSpaces = () =>{
        var data = text.split(/[ ]+/);
        setText(data.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>Remove Extra Sapces</button>
                <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
  )
}
