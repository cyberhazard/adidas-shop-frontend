import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
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
    <Switch>
      <Route exact path="/products/:group/:type" component={List} />
      <Route path="/products/:group/:type/:id" component={Details} />
      <Redirect from="/" to="/products/football/cleats" />
    </Switch>
  </Wrapper>
);
