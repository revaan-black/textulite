import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light")
  
  const [alert, setAlert] = useState(null)

  const showAlert = (maessage, type) => {setAlert({
      msg: maessage,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  } 
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#09274e'
      showAlert('Dark mode enable', 'success')
    }else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode enable', 'success')
    }
  }


  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" about="About"  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes > */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} title="Add text below" mode={mode} />} /> */}
        {/* </Routes > */}
    <TextForm showAlert={showAlert} title="Add text below" mode={mode} />
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
