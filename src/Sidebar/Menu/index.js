import React from 'react';
import { StyledMenu, MenuItem, Text, StyledLink } from './styled';

const Menu = () => (
  <StyledMenu>
    <MenuItem>
      <Text selected>Sports</Text>
      <nav>
        <StyledLink to="/" selected>Shoes</StyledLink>
        <StyledLink to="/">Clothing</StyledLink>
        <StyledLink to="/">Accessories</StyledLink>
      </nav>
    </MenuItem>
    <MenuItem>
      <Text>Brands</Text>
    </MenuItem>
    <MenuItem>
      <Text>Micoach</Text>
    </MenuItem>
  </StyledMenu>
);

export default Menu;
