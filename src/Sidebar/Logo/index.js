import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { LogoImg } from './styled'

const Logo = () => {
  return (
    <Link to="/">
      <LogoImg src={logo} alt="" />
    </Link>
  )
}

export default Logo
