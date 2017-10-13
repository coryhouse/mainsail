import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/userSearchActions';
import { bindActionCreators } from 'redux';

export class UserPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    if (!this.props.user) {
      this.props.actions.searchUsers({ userID: id });
    }
  }

  render() {
    const { id } = this.props.match.params;
    const { user } = this.props;

    return (
      <div>
        {id}
        <br />
        {user && (
          <div>
            {user.firstName}
            <br />
            {user.lastName}
            <br />
          </div>
        )}
      </div>
    );
  }
}

UserPage.propTypes = {
  match: PropTypes.object.isRequired
};

// Connect specific Redux store data to component above
function mapStateToProps(state, ownProps) {
  const { id } = ownProps.match.params;
  return {
    user:
      state.users.length
        ? state.users.find(u => {
            return u.userID === id;
          })
        : null
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
