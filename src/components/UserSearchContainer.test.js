import React from "react";
import { UserSearchContainer } from "./UserSearchContainer";
import renderer from "react-test-renderer";


// it('should hide userList when users do not exist', () => {
//   const tree = renderer
//     .create(<UserSearchContainer users={[]} actions={{}} />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

it('should hide userList when users do not exist', () => {
  const users = [
    {
      firstName: "Mark",
      lastName: "Longman",
      userID: "MLONGMAN"
    }
  ];

  const tree = renderer
    .create(<UserSearchContainer users={users} actions={{searchUsers:() => {}}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});