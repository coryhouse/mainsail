import React from "react";
import ReactDOM from "react-dom";
// Note that we're importing the disconnected App via named import.
import { App } from "./App";
import { mount, shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("root");
  ReactDOM.render(<App users={[]} actions={{}} />, div);
});

// it('deletes user when I click delete', () => {
//   const users = [{id: 1, firstName: 'Cory', lastName: 'House'}];
//   const wrapper = mount(<App />);
//   const deleteButton = wrapper.find('.delete-user');
//   expect(deleteButton.length).toBe(1);
// });

// // Children don't render with shallow
// it("shouldn't render children with shallow", () => {
//   const wrapper = shallow(<App users={[]} actions={{}} />);
//   const formInChild = wrapper.find(".user-list");
//   expect(formInChild.length).toEqual(0);
// });

// // Proof that children render with mount
// it("renders with children", () => {
//   const wrapper = mount(<App users={[]} actions={{}} />);
//   const formInChild = wrapper.find(".user-list");
//   expect(formInChild.length).toEqual(1);
// });
