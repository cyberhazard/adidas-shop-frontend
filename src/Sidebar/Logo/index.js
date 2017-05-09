import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Logo = () => {
  return (
    <Link to="/">
      <img className="sidebar__logo" src={logo} alt="" />
    </Link>
  )
}

export default Logo
