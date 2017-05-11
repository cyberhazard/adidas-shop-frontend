import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 0 0 414px;
  height: 100vh;
  background-color: #0F0F0F;
  padding-top: 50px;
  overflow: auto;
`

export default () => (
  <Wrapper>
    <Logo />
    <Search />
    <Menu />
  </Wrapper>
);
