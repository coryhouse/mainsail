import React from "react";
import { UserSearchPage } from "./UserSearchPage";
import renderer from "react-test-renderer";


it('should hide userList when users do not exist', () => {
  const tree = renderer
    .create(<UserSearchPage users={[]} actions={{searchUsers:() => {}}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should show userList when users exist', () => {
  const users = [
    {
      firstName: "Mark",
      lastName: "Longman",
      userID: "MLONGMAN"
    }
  ];

  const tree = renderer
    .create(<UserSearchPage users={users} actions={{searchUsers:() => {}}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});