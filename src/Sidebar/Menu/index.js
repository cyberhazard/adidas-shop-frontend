import React from 'react';
import { StyledMenu, MenuItem, MainLink, SubLink } from './styled';

export default () => (
  <StyledMenu>
    <MenuItem>
      <MainLink to="/" isSelected>Sports</MainLink>
      <nav>
        <SubLink to="/" isSelected>Shoes</SubLink>
        <SubLink to="/">Clothing</SubLink>
        <SubLink to="/">Accessories</SubLink>
      </nav>
    </MenuItem>
    <MenuItem>
      <MainLink to="/" >Brands</MainLink>
    </MenuItem>
    <MenuItem>
      <MainLink to="/" >Micoach</MainLink>
    </MenuItem>
  </StyledMenu>
);
