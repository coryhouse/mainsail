import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { User } from '../../types';

export class UserPage extends Component {
  render() {
    const {firstName, lastName} = this.props.user;

    return (
      <div>
        { firstName} {lastName}
      </div>
    )
  }
}

UserPage.propTypes = {
  user: PropTypes.shape(User).isRequired
};

// Connect specific Redux store data to component above
function mapStateToProps(state) {
  return {
      // TODO: Get proper user from Redux store based on URL param
    user: {firstName: 'test', lastName: 'user'}
  };
}

export default connect(mapStateToProps)(UserPage);