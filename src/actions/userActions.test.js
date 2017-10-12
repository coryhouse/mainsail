import * as actions from "./userActions";
import * as types from "../constants/actionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";

// Test a sync action
describe("User Actions", () => {
  describe("saveUserSuccess", () => {
    it("should create a SAVE_USER_SUCCESS action", () => {
      //arrange
      const user = { id: 1, firstName: "Cory", lastName: "House" };
      const expectedAction = {
        type: types.SAVE_USER_SUCCESS,
        user: user
      };

      //act
      const action = actions.saveUserSuccess(user);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});
