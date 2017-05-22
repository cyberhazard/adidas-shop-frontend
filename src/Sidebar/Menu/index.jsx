import React from 'react';
import { StyledMenu } from './styled';
import MenuItem from './MenuItem';
import SubLink from './SubLink';

export default () => (
  <StyledMenu>
    <MenuItem to="/" title="Football">
      <SubLink to="/products/football/shoes">Shoes</SubLink>
      <SubLink to="/products/football/clothing">Clothing</SubLink>
      <SubLink to="/products/football/accessories">Accessories</SubLink>
    </MenuItem>
    <MenuItem to="/" title="Running">
      <SubLink to="/products/running/shoes">Shoes</SubLink>
      <SubLink to="/products/running/clothing">Clothing</SubLink>
      <SubLink to="/products/running/accessories">Accessories</SubLink>
    </MenuItem>
    <MenuItem to="/" title="Basketball">
      <SubLink to="/products/basketball/shoes">Shoes</SubLink>
      <SubLink to="/products/basketball/clothing">Clothing</SubLink>
      <SubLink to="/products/basketball/accessories">Accessories</SubLink>
    </MenuItem>
  </StyledMenu>
);
