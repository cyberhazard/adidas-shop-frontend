import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import List from './List';
import Details from './Details';

const Wrapper = styled.div`
  widht: 100%;
  min-height: 100vh;
  display: flex;
`;

export default () => (
  <Wrapper>
    <Sidebar />
    <Route path="/sports" component={List} />
    <Route path="/details" component={Details} />
  </Wrapper>
);
