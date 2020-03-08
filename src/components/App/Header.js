import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='navContainer'>
        <Link to='/HomePage'>caseyharvey</Link>
        <div className='rightSide'>
          <Link to='/Projects'>projects</Link>
          <Link to='/Contact'>contact</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
