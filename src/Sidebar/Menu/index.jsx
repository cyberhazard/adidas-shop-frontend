import React from 'react';
import { StyledMenu, MenuItem, MainLink as MainLinkStyled, SubLink as SubLinkStyled } from './styled';

const SubLink = ({ to, children }) =>
  <SubLinkStyled to={to} activeClassName="is-selected">{children}</SubLinkStyled>;

const MainLink = ({ to, children }) =>
  <MainLinkStyled to={to} activeClassName="is-selected">{children}</MainLinkStyled>;

export default () => (
  <StyledMenu>
    <MenuItem>
      <MainLink to="/sports">Sports</MainLink>
      <nav>
        <SubLink to="/sports/shoes">Shoes</SubLink>
        <SubLink to="/sports/clothing">Clothing</SubLink>
        <SubLink to="/sports/accessories">Accessories</SubLink>
      </nav>
    </MenuItem>
    <MenuItem>
      <MainLink to="/brands">Brands</MainLink>
    </MenuItem>
    <MenuItem>
      <MainLink to="/micoach">Micoach</MainLink>
    </MenuItem>
  </StyledMenu>
);
