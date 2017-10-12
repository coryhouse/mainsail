import React from 'react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import { Table } from 'semantic-ui-react';

class UserList extends React.Component {
  render() {
    const {users} = this.props;
    return (
      <div>
        <h2>{users.length} Search Results</h2>

        <Table selectable="true" sortable="true" celled size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map((user, index) => {
              const fullName = user.firstName + " " + user.lastName;
              console.log(fullName);
              return (
                <Table.Row key={user.userID}>
                  <Table.Cell>{index+1}.</Table.Cell>
                  <Table.Cell>{user.lastName.startsWith('F') ? <a href='#'>{fullName}</a> : fullName}</Table.Cell>
                  <Table.Cell>{user.emailAddress}</Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;