import React from "react";
import "./App.css";
import HomePage from './pages/HomePage';
import UserSearchPage from "./pages/UserSearchPage";
import UserPage from "./pages/UserPage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>

          {this.state.redirect && <Redirect from="/searchold" to="/search" /> }

          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/search" component={UserSearchPage}/>
            <Route path="/user/:id" component={UserPage}/>
            <Route component={HomePage}/>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;