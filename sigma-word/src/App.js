import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "rgb(51 53 62)";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  const capitalize = (word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  return (
    <>
    <Navbar toggle={toggleMode} mode={mode} caps={capitalize}/>
    {/* <Ticket title="Happy Birthday" desc="This is Props for this component" /> */}
    {/* <Ticket /> */}
    {/* <Ticket title="This is Required prop" desc={56} /> */}
    {/* <Ticket title="This is Required prop" /> */}
    <div className="container my-4">
    <TextForm label="Enter Your Text Here" rows="7" mode={mode}/>
    </div>
    </>
  );
}

export default App;
