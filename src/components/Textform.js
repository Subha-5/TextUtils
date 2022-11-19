import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked." + text);
        // setText("You have clicked on handleUpClick");
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase!","success")
    }
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text cleared!","success")
    }
    const handleCopy = ()=> {
        var copyText = document.getElementById("myBox")
        // console.log(copyText)
        copyText.select();
        navigator.clipboard.writeText(copyText.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Copied to clipboard!","success")
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        // console.log(event);
        setText(event.target.value)
    }
    const [text, setText] = useState('') // useState Hooks
    // text = "new Text" // Wrong way to set the text
    // setText ("new Text") // Correct way to change the state
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={ {backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}  disabled={text.length===0}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}  disabled={text.length===0}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}  disabled={text.length===0}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}  disabled={text.length===0}>Copy Text</button>
        </div>
        <div className="container mt-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter( element => {return element.length !==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter( element => {return element.length}).length } minutes read</p>
            <h3>Preview</h3>
            <p className='lead'>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
