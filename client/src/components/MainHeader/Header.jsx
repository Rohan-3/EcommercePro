import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <div>
          <div>
            <Link>LOGO</Link>
          </div>
          <div>
            <Navbar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
