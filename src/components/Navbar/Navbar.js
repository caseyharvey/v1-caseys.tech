import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.sass';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <Link to='/'>about</Link>
        <div className='right-side'>
          <Link to='/Projects'>projects</Link>
          <Link to='/Contact'>contact</Link>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://blog.caseys.tech/'
          >
            blog
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
