import React from 'react';
import Submenu from './Submenu';

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu__item menu__item_selected"><span>Sports</span>
        <Submenu />
      </div>
      <div className="menu__item"><span>Brands</span></div>
      <div className="menu__item"><span>Micoach</span></div>
    </nav>
  )
};

export default Menu
