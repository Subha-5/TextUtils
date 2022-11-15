import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked." + text);
        // setText("You have clicked on handleUpClick");
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
    }
    const handleCopy = ()=> {
        var copyText = document.getElementById("myBox")
        console.log(copyText)
        copyText.select();
        navigator.clipboard.writeText(copyText.value)
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
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
        </div>
        <div className="container mt-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here."}</p>
        </div>
        </>
    )
}
