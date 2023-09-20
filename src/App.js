
import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/Textform';
import Alert from './Components/Alert';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
*/
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
 const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0E0C0A';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
<>

<Navbar title = "TextUtils" abouttext = "AboutUs" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">

          
          
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>
          
          

</div>

</>
  );
}

export default App;
