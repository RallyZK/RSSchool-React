import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='flex py-1 px-5 justify-center w-full bg-green-900'>
        <nav className='w-full'>
          <ul className='w-full flex justify-between '>
            <li>
              <a href='#' className='transition ease-in duration-300 hover:text-white'>
                GitHub
              </a>
            </li>
            <li>
              <a href='#' className='transition ease-in duration-300 hover:text-white'>
                2023
              </a>
            </li>
            <li>
              <a href='#' className='transition ease-in duration-300 hover:text-white'>
                RS School
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Footer;
