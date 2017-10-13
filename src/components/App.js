import React from "react";
import "./App.css";
import UserSearchPage from "./pages/UserSearchPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserSearchPage/>
      </div>
    );
  }
}

export default App;