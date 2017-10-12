import React from 'react';
import PropTypes from 'prop-types';

class UserList extends React.Component {
  render() {
    const {users} = this.props;
    return (
      <div>
        <h2>Search Results</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;