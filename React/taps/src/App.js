import logo from './logo.svg';
import './App.css';
import Tabs from './compnents/Tabs';
import React, {useState} from 'react';

function App() {
  return (
    <div className="App">
    <Tabs arrTab= {[{label:"tab1", content:"tab1 content1"}, 

                  {label:"tab2", content:"tab2 content2"}, 

                  {label:"tab3", content:"tab3 content3"}]}/>
    </div>
  );
}

export default App;
