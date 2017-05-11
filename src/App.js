import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import List from './List';
import Details from './Details';

const Wrapper = styled.div`
  widht: 100%;
  min-height: 100vh;
  display: flex;
`

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar />
        <Route exact path="/" component={List} />
        <Route path="/details" component={Details} />
      </Wrapper>
    );
  }
}
