import React from 'react';
import { Wrapper, MenuItem, MenuLink } from './styled';

const Submenu = () => {
  return (
    <Wrapper>
      <MenuItem>
        <MenuLink to="#" selected>Shoes</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="#">Clothing</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="#">Accesories</MenuLink>
      </MenuItem>
    </Wrapper>
  )
};

export default Submenu
