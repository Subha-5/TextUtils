import React from 'react'

export default function About(props) {
    /*const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    }); */
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black', 
        backgroundColor: props.mode === 'light' ? 'white' : 'rgb(56,55,55)',
        // border: '2px solid',
        // borderColor: 'white',
    }
    return (
        <div className="container" style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion my-5" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>Why this project was created?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This page was created to play with text.</strong> I was actually learning React and was having a good time, but then I thought of learning React from a famous playlist on Youtube and it was by <code>@codewithharry</code>. It was indeed a deliteful experience to learn such a famous JavaScript library from such a nice teacher, so I just went with the flow to create this project with the instructor.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>About me 😎</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>A human by body and a programmer by mind.</strong> Going through the wonderful journey of HTML, CSS and JavaScript. I actually started to like JavaScript and related frameworks never went back. Many other options are available for backend development like Python and PHP. But thinking over JavaScript, one can both create web apps and mobile apps (with the use of React Native). There is also our helpful Stack Overflow Developer Survey which suggest the dominance of JavaScript in programming world. So I will stick to it for sometime, but who knows the future. <code>Thank you world.</code>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>Analyze your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or reading time.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={myStyle}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word or character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={myStyle}>
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Micrsoft Edge, Safari, Opera, etc. It suits to count characters in Facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
