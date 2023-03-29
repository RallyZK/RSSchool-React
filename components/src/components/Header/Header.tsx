import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
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
    </header>
  );
};

export default Header;
