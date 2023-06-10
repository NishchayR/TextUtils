import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"


function App() {

  const [mode, setmode] = useState('light');
  const [modetxt, setmodetxt] = useState('Enable DarkMode');

  const togglemode = () => {
    if (mode === 'light') {
      setmode("dark")
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert("DarkMode Enabled", "success")
      setmodetxt('Disable DarkMode')
      document.title=("TextUtils-DarkMode")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("DarkMode Disabled", "success")
      setmodetxt('Enable DarkMode')
      document.title=("TextUtils")
    }
  }

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) =>{
      setalert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} togglemode={togglemode} modetxt={modetxt}/>
      <div className="container my-3" ><Alert alert={alert}/></div>
      <div className="container my-3" >
         <Switch>
          <Route exact path="/about">
            <About mode={mode} aboutheading = "About Us"/>
          </Route>
          <Route exact path="/">
            <TextBox mode={mode} showAlert={showAlert} heading="Enter your text to analyze below"/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
