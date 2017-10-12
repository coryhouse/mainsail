import React, {Component} from 'react';
import UserSearch from "./UserSearch";
import UserList from './UserList';
import { connect } from "react-redux";
import * as actions from "../actions/userSearchActions";
import { bindActionCreators } from "redux";

class UserSearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'FER%',
      lastName: ''
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleClear = () => {
    this.setState({lastName: '', firstName: ''});
  };

  handleSearchRequest = (event) => {
    event.preventDefault();
    console.log(this.state.firstName);
    this.props.actions.searchUsers({
      firstName: this.state.firstName
    });
  };

  render() {
    const {firstName, lastName} = this.state;
    const {users} = this.props;

    return (
      <div>
        <UserSearch
          onSearch={this.handleSearchRequest}
          onChange={this.handleChange}
          onClear={this.handleClear}
          firstName={firstName}
          lastName={lastName}
        />

        {users.length > 0 && <UserList users={users} />}
      </div>
    )
  }
}

// Connect specific Redux store data to component above
function mapStateToProps(state) {
  return {
    users: state.users
  };
}

// Connect specific Redux actions to component above
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchContainer);