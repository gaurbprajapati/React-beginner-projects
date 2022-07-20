import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Increatmentnumber from './components/Increatmentnumber';
import About from './components/About';
import Alert from './components/Alert';

// enter sortcut imrs to import this 
import { useState } from "react"







function App() {

  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message , type) => {
    setAlert({
      message : message ,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark Mode has been Enabled","success");
 
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been Enabled","success");

    }
};

  return (
<>
{/* // ========================1st tuit   */}

<Navbar title="Gaurav" Home="MY-Name"  mode={mode} toggleMode={toggleMode} />
{/* // ========================1st tuit   */}



{/* //=======================4th tuit === */}

<Alert alert={alert}/>

{/* //=======================4th tuit === */}







{/* // ========================2nd tute a */}
<div className="container my-3">
<Textform showAlert={showAlert} heading="Enter the text to analyse Below"  mode={mode} />
</div>
{/* // ========================2nd tute a */}











{/* // ========================3nd tute  */}

{/* <About/> */}

{/* // ========================3nd tute  */}
























{/* ///* ======================================  */}

{/* <div className="container">
<Increatmentnumber/>
</div> */}

{/* ========================================= */}

  
</>

  );
}

export default App;
