import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
      if( mode === 'light'){
        setMode('black');
      }
      else{
        setMode('light');
      }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} showAlert={showAlert}/>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/" element={<TextForm heading = "Enter text below to analyze" showAlert={showAlert}/>}/>
    </Routes>
    {/* <div className="container my-3">
      <TextForm heading = "Enter text below to analyze" showAlert={showAlert}/>
      <About/>
    </div> */}
    </>
  );
}

export default App;
