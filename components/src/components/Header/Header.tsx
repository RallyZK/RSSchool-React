import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  links = [
    {
      link: '/',
      title: 'Home Page',
    },
    {
      link: '/about',
      title: 'About Us',
    },
    {
      link: '/forms',
      title: 'Forms',
    },
  ];

  render() {
    return (
      <header className='header'>
        <nav>
          <ul className='header-ul'>
            {this.links.map((link) => (
              <li key={link.title}>
                <NavLink className='navlink' to={link.link}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
