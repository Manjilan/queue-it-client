import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="/signup">Signup</a>
        <a href="/login">Login</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
    )
  }
}

export default Nav;
