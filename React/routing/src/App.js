import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import React,{useState} from 'react';
import {Router} from '@reach/router';

function App() {

  return (
    <div className="App">
      <Router>
    <Home path = "/home"/>
    <Home path = "/:id"/>
    
    <Home path = "/:id/:color/:backgroundcolor"/>
    </Router>
    </div>
  );
}

export default App;
