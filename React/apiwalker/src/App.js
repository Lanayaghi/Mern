import logo from './logo.svg';
import './App.css';
import {Router} from "@reach/router";
import People from './components/People';
import Planet from './components/Planet';
import Search from './components/Search';





function App() {

  
  return (
  <div className = "App">
      <Search/>
        <Router>
        <People path="/people/:id" />
        <Planet path="/planets/:id" />
      
      </Router>
  </div>
  );
}

export default App;
