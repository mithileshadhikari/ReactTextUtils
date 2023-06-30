import React,{useState} from 'react';
import './App.css';
//import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import Alert from './componants/Alert';
/*import {
  BrowserRouter as Router,
   Routes,
  Route,
  Link
} from "react-router-dom";*/


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert]= useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode Enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode Enabled","success");

    }
  }
  return (
    <>
   {/* <Router>*/}
<Navbar title="textutils" mith="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
{/*<Routes>
          <Route path='/about' element={<About />}/>
            
         
  <Route path='/text'element={*/}
            <TextForm heading="Enter text below to analyze" mode={mode}/>
          {/*}}/>*/}
          
          
{/*</Routes>*/}
        </div>
       {/* </Router>*/}



    </>
  );
}

export default App;
