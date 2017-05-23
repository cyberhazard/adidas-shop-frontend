import React from 'react';
import { Wrapper } from './styled';
import Menu from './Menu';
import Link from './Link';

export default () => (
  <Wrapper>
    <Menu title="Football">
      <Link to="/products/football/shoes">Shoes</Link>
      <Link to="/products/football/clothing">Clothing</Link>
      <Link to="/products/football/accessories">Accessories</Link>
    </Menu>
    <Menu title="Running">
      <Link to="/products/running/shoes">Shoes</Link>
      <Link to="/products/running/clothing">Clothing</Link>
      <Link to="/products/running/accessories">Accessories</Link>
    </Menu>
    <Menu title="Basketball">
      <Link to="/products/basketball/shoes">Shoes</Link>
      <Link to="/products/basketball/clothing">Clothing</Link>
      <Link to="/products/basketball/accessories">Accessories</Link>
    </Menu>
  </Wrapper>
);
