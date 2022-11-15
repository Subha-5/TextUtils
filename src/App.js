import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setmode] = useState('light'); // Whether dark mode enabled or not
  const toggleMode = () => {
    if( mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'rgb(56, 55, 55)'
    } else {
      setmode('light')
      document.body.style.backgroundColor = '#ffffff'
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Textform heading="Enter the text to analyze below" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
