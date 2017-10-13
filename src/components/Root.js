import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './App';
import ErrorBoundary from "./ErrorBoundary";

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <ErrorBoundary>      
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
      </ErrorBoundary>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
