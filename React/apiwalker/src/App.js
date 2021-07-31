import logo from './logo.svg';
import './App.css';
import {Router} from "@reach/router";
import Home from "./components/Home";
// import Category from './components/Category';
import {useState, useEffect} from 'react';


function App() {
  const [search, setSearch] = useState({
    category : "people",
    id: ""
  })

  const changeHandeler = event => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    })
  }
    const submitHandeler = event => {
      event.preventDefault();
      
    }
  
  return (
    <div className="App">
    
      <Home  search= {search}  changeHandeler = {changeHandeler}  submitHandeler = {submitHandeler} />
      {/* <Category path = "/:name/:id"/> */}
      
    
    </div>
  );
}

export default App;
