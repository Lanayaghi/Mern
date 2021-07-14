import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard.js';
import React from 'react';

function App() {
  return (
    <div className="App">
    <PersonCard lastname = {"Doe"} firstname = {"Jane"} age= {45} haircolor= {"Black"}/>
    <PersonCard lastname = {"Smith"} firstname = {"John"} age= {88} haircolor= {"Brown"}/>
    <PersonCard lastname = {"Fillmore"} firstname = {"Millard"} age= {50} haircolor= {"Brown"}/>
    <PersonCard lastname = {"Smith"} firstname = {"Maria"} age= {62} haircolor= {"brown"}/>
      
    </div>
  );
}

export default App;
