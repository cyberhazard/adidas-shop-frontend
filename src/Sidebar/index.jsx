import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

const Wrapper = styled.div`
  flex: 0 0 414px;
  height: 100vh;
  background-color: #0F0F0F;
  padding-top: 50px;
  overflow: auto;
`;

export default () => (
  <Wrapper>
    <Logo />
    <Search />
    <Menu />
  </Wrapper>
);
