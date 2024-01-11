import "./App.css";
import About from "./components/Body/About";
import Alert from "./components/Header/Alert";
import Navbar from "./components/Header/Navbar";
import TextForm from "./components/Body/TextForm";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [type, setType] = useState(null);
  const [message, setMessage] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(51 53 62)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };
  const displayAlert = (msg, alertType) => {
    setType(alertType);
    setMessage(msg);
    setTimeout(() => {
      setType(null);
      setMessage(null);
    }, 2000);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          toggle={toggleMode}
          alert={displayAlert}
          mode={mode}
          caps={capitalize}
        />
        <Alert type={type} message={message} caps={capitalize} />
        {/* <Ticket title="Happy Birthday" desc="This is Props for this component" /> */}
        {/* <Ticket /> */}
        {/* <Ticket title="This is Required prop" desc={56} /> */}
        {/* <Ticket title="This is Required prop" /> */}
        <div className="container my-4">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  label="Enter Your Text Here"
                  rows="7"
                  mode={mode}
                  alert={displayAlert}
                />
              }
            ></Route>
            <Route path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
