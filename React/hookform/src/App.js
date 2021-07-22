import logo from './logo.svg';
import './App.css';
import HookForm from './components/HookForm';
import React, { useState } from "react";
import  Output  from './components/Output';

function App() {
  const [state, setState] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmpassword : ""
  })
  return (
    <div className="App">
    <HookForm values = {state} setvalue = {setState} />
    <Output  results ={state}/>
    </div>
  );
}

export default App;

