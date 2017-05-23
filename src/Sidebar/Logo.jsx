import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from './../media';

const Wrapper = styled.div`
  text-align: center;
  ${media.tablet`
    position: absolute;
    top: 16px;
    left: 16px;
    height: 30px;
  `}
`;

const Img = styled.img`
  ${media.tablet`height:100%;`}
`;

export default () => (
  <Wrapper>
    <Link to="/">
      <Img src={require('./../assets/images/logo.png')} alt="Logo" />
    </Link>
  </Wrapper>
);
