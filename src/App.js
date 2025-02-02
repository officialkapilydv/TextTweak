import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

{/*import About from './components/About';*/}
{/*import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';*/}



function App() {
  const [mode, setMode] = useState('light'); // Tell us whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
  }


  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
    
  }
  return (
    <>   
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils" />
<Alert alert={alert}/>

<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode}/>
{/*<About/>*/}
</div>
    </>
  );
}

export default App;