import React from 'react';
import Submenu from './Submenu';
import { Wrapper, MenuItem, Span } from './styled';

const Menu = () => {
  return (
    <Wrapper>
      <MenuItem selected>
        <Span selected>Sports</Span>
        <Submenu />
      </MenuItem>
      <MenuItem>
        <Span>Brands</Span>
      </MenuItem>
      <MenuItem>
        <Span>Micoach</Span>
      </MenuItem>
    </Wrapper>
  )
};

export default Menu
