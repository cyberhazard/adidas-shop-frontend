import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

export default () => (
  <Wrapper>
    <Link to="/">
      <img src={require('./../assets/images/logo.png')} alt="Logo" />
    </Link>
  </Wrapper>
);
