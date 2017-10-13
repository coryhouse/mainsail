import React from "react";
import "./App.css";
import HomePage from './pages/HomePage';
import UserSearchPage from "./pages/UserSearchPage";
import UserPage from "./pages/UserPage";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
          
          <Route path="/" exact component={HomePage}/>
          <Route path="/search" component={UserSearchPage}/>
          <Route path="/user/:id" component={UserPage}/>
        </div>
      </Router>
    );
  }
}

export default App;