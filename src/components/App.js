import React from "react";
import "./App.css";
import UserSearchContainer from "./UserSearchContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserSearchContainer/>
      </div>
    );
  }
}

export default App;