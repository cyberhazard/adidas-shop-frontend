import React from 'react';

const Submenu = () => {
  return (
    <nav className="menu__submenu">
      <div className="menu__subitem">
        <a className="menu__link menu__link_active" href="#">Shoes</a>
      </div>
      <div className="menu__subitem">
        <a className="menu__link" href="#">Clothing</a>
      </div>
      <div className="menu__subitem">
        <a className="menu__link" href="#">Accesories</a>
      </div>
    </nav>
  )
};

export default Submenu
