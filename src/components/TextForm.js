import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    let count = 0;

    let handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("To Upper case","dark");
    }

    let handleLoClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("To lower case","danger");
    }

    let handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <div className='container' style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}>
            <div className="mb-3 my-5">
                <h2>Enter your text to analyze here</h2>

                <textarea className="form-control" rows="5" value={text} 
                style={{backgroundColor:props.mode==='dark'?'grey':'white', 
                color:props.mode==='dark'?'white':'black'}}
                onChange={handleOnChange}></textarea>

                <button className='btn btn-primary mx-1 my-3' onClick={handleUpClick}>Upper</button>

                <button className="btn btn-primary mx-1 my-3" onClick={handleLoClick}>Lower</button>

                <h2>Analysis</h2>
                <p>{text.split(/\S+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
                <p>Time taken to read is {0.08*text.split(/\S+/).filter((element)=>{return element.length !== 0}).length}s</p>
                <h2>Preview</h2>
                <p>There are {(text.match(/ram/g) || []).length} Ram's</p>
            </div>
        </div>
    );
}