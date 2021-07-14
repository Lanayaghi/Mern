import logo from './logo.svg';
import './App.css';
import React from 'react';
import Mycomponents from './components/Mycomponents';

function App() {
  return ( 
    
    <div className="App">
    <Mycomponents/>
    <header className="App-header">
      
      <h1>Hello Dojo!</h1>

      <p>What I Need To Do :</p>
      <ul>
        <li> Learn react</li>
        <li> Climb Mt. Everest</li>
        <li> Run a Marathon</li>
        <li>Feed the dogs</li>
      </ul>
      
    </header>
    </div>
  
    
  );
}

export default App;
