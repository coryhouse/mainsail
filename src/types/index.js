import PropTypes from 'prop-types';

export const User = PropTypes.shape({
  userID: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
});