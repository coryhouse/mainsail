import React from 'react';
import PropTypes from 'prop-types';

class UserSearch extends React.Component {
  render() {
    const {onSearch, onClear, onChange, firstName, lastName} = this.props;
    return (
      <form>
        <label>First Name</label>
        <input type="text" className="uppercase" name="firstName" onChange={onChange} value={firstName} />

        <label>Last Name</label>
        <input type="text" name="lastName" onChange={onChange} value={lastName} />

        <input type="submit" onClick={onSearch} value="Search" />
        <button type="button" onClick={onClear}>Clear</button>
      </form>
    )
  }
}

UserSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default UserSearch;