import React from 'react';
import { StyledMenu, MenuItem, Text, StyledLink } from './styled';

export default () => (
  <StyledMenu>
    <MenuItem>
      <Text isSelected>Sports</Text>
      <nav>
        <StyledLink to="/" isSelected>Shoes</StyledLink>
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
