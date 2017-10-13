import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import UserSearchPage from "./pages/UserSearchPage";
import UserPage from "./pages/UserPage";
import DynamicImportExamplePage from "./pages/DynamicImportExamplePage";
import LazyLoadedHeavyComponentExamplePage from "./pages/LazyLoadedHeavyComponentExamplePage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/dynamic-import">Dynamic import example</Link>
            </li>
            <li>
              <Link to="/lazy-load-react">
                Lazy loaded React component example
              </Link>
            </li>
          </ul>

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search" component={UserSearchPage} />
            <Redirect from="/searchold" to="/search" />
            <Route path="/user/:id" component={UserPage} />
            <Route
              path="/dynamic-import"
              component={DynamicImportExamplePage}
            />
            <Route
              path="/lazy-load-react"
              component={LazyLoadedHeavyComponentExamplePage}
            />
            <Route component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
