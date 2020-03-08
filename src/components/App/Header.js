import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='nav-container'>
        <Link to='/HomePage'>caseyharvey</Link>
        <div className='right-side'>
          <Link to='/Projects'>projects</Link>
          <Link to='/Contact'>contact</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
