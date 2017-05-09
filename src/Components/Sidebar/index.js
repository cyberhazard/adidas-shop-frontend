import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <Search />
      <Menu />
    </div>
  )
}

export default Sidebar
