import React, { useState } from 'react';

export default function TextBox(props) {
    const [text, setText] = useState("");

    const handleonchange = (event)=>{
        setText(event.target.value);
    }

    const handleonclickup = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleonclicklow = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleonclickclear = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Clear", "success");
    }

    
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark' ? '#202026':'white', color: props.mode==='dark' ? 'white':'black'}} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleonclickup} >Convert to UpperCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleonclicklow} >Convert to LowerCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleonclickclear} >Clear</button>
    </div>
    <div className="container my-3">
    <h2>Summary</h2>
    <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> charaters</p>
    <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> minutes to read</p>
    
    <h4>Preview</h4>
    <p>{text.length>0?text:"Nothimg to preview!"}</p>
    {/* <p>{text.length===0?<h1>helo</h1>:{text}}</p> */}
    </div>
    </>
  )
}

