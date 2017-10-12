import React from "react";
import UserSearch from "./UserSearch";
import renderer from "react-test-renderer";

it("should render 2 empty search fields", () => {
  const tree = renderer
    .create(<UserSearch firstName='Mark' lastName='Longman' onSearch={jest.fn} onChange={jest.fn} onClear={jest.fn} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});