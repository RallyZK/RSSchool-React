import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <nav>
          <ul className='header-ul'>
            <li>
              <NavLink className='navlink' to={'/'}>
                Home Page
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/about'}>
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
