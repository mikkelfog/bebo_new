import React, { Component } from 'react';
import Accounts from './accounts';

class Header extends Component {
  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand" href="./">Bebonomo</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="./Favlist">Favorite List</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
