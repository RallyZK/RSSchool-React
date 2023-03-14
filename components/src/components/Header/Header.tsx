import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className='flex py-1 px-5 justify-center w-full bg-green-900'>
        <nav>
          <ul className='flex justify-center w-full gap-5'>
            <li>
              <NavLink className='transition ease-in duration-300 hover:text-white' to={'/'}>
                HomePage
              </NavLink>
            </li>
            <li>
              <NavLink className='transition ease-in duration-300 hover:text-white' to={'/about'}>
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
