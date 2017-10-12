import React from "react";
import ReactDOM from "react-dom";
// Note that we're importing the disconnected App via named import.
import { App } from "./App";
import { mount, shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("root");
  ReactDOM.render(<App />, div);
});
