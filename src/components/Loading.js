import React from 'react';
import PropTypes from 'prop-types';

function Loading({ isLoading, pastDelay, error }) {
  if (isLoading && pastDelay) {
    return <p>Loading...</p>;
  } else if (error && !isLoading) {
    return <p>Error!</p>;
  } else {
    return null;
  }
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
  pastDelay: PropTypes.bool,
  error: PropTypes.string
};

export default Loading;
