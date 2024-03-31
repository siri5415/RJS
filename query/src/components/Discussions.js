import { BrowserRouter as Router, Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import '../App.css';
import DiscussionThread from "./DiscussionThread";

const Discussions = () => {
    const {path, url} = useRouteMatch();
  return (
    <>
      <h2>All Discussions</h2>

      <Router>
        <ul>
          <li><NavLink activeClassName="App-link" to={`${url}/Motorbikes`}>Motorbikes</NavLink></li>
          <li><NavLink activeClassName="App-link" to={`${url}/Cars`}>Cars</NavLink></li>
          <li><NavLink activeClassName="App-link" to={`${url}/Computers`}>Computers</NavLink></li>
          <li><NavLink activeClassName="App-link" to={`${url}/Mars`}>Mars</NavLink></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path={path}>
            <h3>Please Select the topic of discussion</h3>
          </Route>
          <Route path={`${path}/:discussionThread`}>
            <DiscussionThread/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Discussions;
