import React from 'react'
import PropTypes from 'prop-types'

import 'normalize.css';
import './../utilities/css/index.js';

import Loader from '../components/Loader/index.jsx';

const Layout = ({ children, data }) => (
  <div>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
