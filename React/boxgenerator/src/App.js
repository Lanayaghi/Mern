import './App.css';
import React,  { useState } from 'react';
import Form from './components/Form';



function App() {

const [boxes, setBoxes] = useState([]);

    return (<div className = "app">

    <Form boxes={boxes} setBoxes={setBoxes}/>

  <div style = {{ display: "flex"}}>
    {
      boxes.map((color, i) => {
        return (

        <div key = {i} style = {{backgroundColor: color, width: 200, height: 200, margin:5
        }}

        ></div>
      
    
        );   
})}
  </div>
  </div>
  
    
        ); 
}

export default App;
