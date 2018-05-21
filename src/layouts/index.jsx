import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import { Provider } from 'react-redux';
import store from './../redux/store';
import './../utilities/css';


export default function Layout({ children }) {
  return (
    <Provider {...{ store }}>
      {children()}
    </Provider>
  );
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
