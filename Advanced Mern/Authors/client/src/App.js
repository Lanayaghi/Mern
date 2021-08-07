import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import Update from './views/Update';
import All from './views/All';

function App() {
  return (
    <div className="App">
      
          <h1>Favorite Authors</h1>
        <Router>
          <All path = "/"/>
          <Main path = "/new"/>
          <Update path = "/new/:id/edit"/>

        </Router>
      
    </div>
  );
}

export default App;
