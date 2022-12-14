import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes, // Switch previously used
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); // Whether dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  /*const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }*/

  const toggleMode = (cls) => {
  /* const toggleMode = (cls) => {
    // console.log(cls)
    
    // removeBodyClasses()
    // document.body.classList.add('bg-'+cls) */
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'rgb(56, 55, 55)'
      showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils- Dark Mode"

      /*setInterval(() => {
        document.title = 'TextUtils is Amazing'
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now !!!'
      }, 1500);*/
    } else {
      setmode('light')
      document.body.style.backgroundColor = '#ffffff'
      showAlert("Light mode has been enabled", "success")
      // document.title = "TextUtils- Light Mode"
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About" /> */}

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            {/* /users --> Component 1
          /users/home --> Component 2 */}
            <Route exact path='/'
              element={<Textform heading="Try TextUtils - Word counter, Character counter" mode={mode} showAlert={showAlert} />}
            ></Route>
            <Route exact path='/about'
              element=<About mode={mode} />
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
