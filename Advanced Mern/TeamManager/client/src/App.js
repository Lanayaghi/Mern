import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import All from './views/All';
import Main from './views/Main';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Router>
          <All path = "/players/list"/>
          <Main path = "/players/addplayer"/>

        </Router>
      </header>
    </div>
  );
}

export default App;
