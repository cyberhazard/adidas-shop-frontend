import React from 'react';
import { Wrapper } from './styled';
import Menu from './Menu';
import Link from './Link';

export default () => (
  <Wrapper>
    <Menu title="Football">
      <Link to="/products/football/cleats">Cleats</Link>
      <Link to="/products/football/apparel">Apparel</Link>
      <Link to="/products/football/accessories">Accessories</Link>
    </Menu>
    <Menu title="Running">
      <Link to="/products/running/shoes">Shoes</Link>
      <Link to="/products/running/apparel">Apparel</Link>
      <Link to="/products/running/accessories">Accessories</Link>
    </Menu>
    <Menu title="Basketball">
      <Link to="/products/basketball/shoes">Shoes</Link>
      <Link to="/products/basketball/apparel">Apparel</Link>
      <Link to="/products/basketball/accessories">Accessories</Link>
    </Menu>
  </Wrapper>
);
