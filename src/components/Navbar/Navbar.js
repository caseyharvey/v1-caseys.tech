import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.sass';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <Link to='/HomePage'>about</Link>
        <div className='right-side'>
          <Link to='/Projects'>projects</Link>
          <Link to='/Contact'>contact</Link>
          <Link to='/Blog'>blog</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
