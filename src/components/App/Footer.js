import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
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
export default Footer;
