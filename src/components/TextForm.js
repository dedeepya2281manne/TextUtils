import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        if(text.split(" ").filter((element)=>{
            return element.length!==0;
        }).length){
        props.showAlert("Text converted to UpperCase","success");
        }
        setText(newText);
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        if(text.split(" ").filter((element)=>{
            return element.length!==0;
        }).length){
            props.showAlert("Text converted to LowerCase","success");
        }
        setText(newText);
    }
    const handleClear = () =>{
        let newText = "";
        setText(newText);
        if(text.split(" ").filter((element)=>{
            return element.length!==0;
        }).length){
            props.showAlert("Text is cleared","success");
        }
    }
    const handleCopyText = () =>{
        var data = document.getElementById('myBox');
        navigator.clipboard.writeText(data.value);
        if(text.split(" ").filter((element)=>{
            return element.length!==0;
        }).length){
            props.showAlert("Text is copied","success");
        }
    }
    const handleRemoveSpaces = () =>{
        var data = text.split(/[ ]+/);
        setText(data.join(" "));
        if(text.split(" ").filter((element)=>{
            return element.length!==0;
        }).length){
            props.showAlert("Extra spaces removed","success");
        }
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
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaces}>Remove Extra Sapces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element)=>{
                    return element.length!==0;
                }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{
                    return element.length!==0;
                }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?{text}:"Nothing to preview."}</p>
            </div>
        </>
  )
}
