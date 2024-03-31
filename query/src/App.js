import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import Discussions from './components/Discussions';


function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><NavLink to="/" activeClassName="App-link">Home</NavLink></li>
          <li><NavLink to="/discussions" activeClassName="App-link">Discussions</NavLink></li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/"><p>Home</p></Route>
          <Route path="/discussions">
            <Discussions/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
