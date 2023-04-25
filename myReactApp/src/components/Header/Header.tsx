import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/about',
    title: 'About',
  },
  {
    link: '/forms',
    title: 'Forms',
  },
];

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul className='header-ul'>
          {links.map((link) => (
            <li key={link.title}>
              <NavLink className='navlink' to={link.link}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className='logo' onClick={() => console.log('star wars')}></div>
    </header>
  );
};

export default Header;
