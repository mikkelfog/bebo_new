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
              <a href="./Favlist">Favoritiste</a>
            </li>
          </ul>
          <span className="pull-right">
            <Accounts />
          </span>
        </nav>
    );
  }
}

export default Header;
