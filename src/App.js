// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/textForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Switch ,Routes, Route, Link } from "react-router-dom";
function App() {
  
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState({
    type : '',
    msg : ''
  });
  function showAlert(type,message) {
    setAlert({type:type,msg:message});
    setTimeout(() => {
      showAlert(null);
    }, 3500);
    // setTimeout(() => {
    //   document.title = 'Alert Is activated'
    // }, 1500);
    // setTimeout(() => {
    //   document.title = 'Alert Is deactivated'
    // }, 2500);
  }
  function toggleMode() {
    console.log("asdf");
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('danger','Dark Mode Activated')
      document.title = 'Dark Mode Active'
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('primary','Dark Mode Deactivated')
      document.title = 'Dark Mode Dectiveated'

    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils2" mode={mode} aboutText="About" toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
    <Switch>
    <Route path="/about">
          <About mode={mode} />
          </Route>
         
          <Route path="/">
          <TextForm showAlert={showAlert} fieldname="Enter Text" alert={alert} mode={mode} />
          </Route>
    </Switch>
    

</div>
</Router>
{/* <Navbar title="TextUtils2" mode={mode} aboutText="About" toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} fieldname="Enter Text" alert={alert} mode={mode} /> */}
</>
   
          
        
       
   
   
  );
}

export default App;
