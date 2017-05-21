import React from 'react';
import { StyledMenu, SubLink } from './styled';
import MenuItem from './MenuItem';

export default () => (
  <StyledMenu>
    <MenuItem to="/" title="Sports">
      <nav>
        <SubLink to="/" isSelected>Shoes</SubLink>
        <SubLink to="/">Clothing</SubLink>
        <SubLink to="/">Accessories</SubLink>
      </nav>
    </MenuItem>
    <MenuItem to="/" title="Brands" />
    <MenuItem to="/" title="Micoach" />
  </StyledMenu>
);
