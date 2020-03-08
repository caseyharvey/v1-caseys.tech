import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/HomePage'>caseyharvey</Link>
      <div>
        <Link to='/Projects'>Projects</Link>
        <Link to='/Contact'>Contact</Link>
      </div>
    </div>
  );
};
export default Header;
