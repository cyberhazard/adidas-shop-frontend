import React from 'react';
import styled from 'styled-components';
import media from './../media';

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  left:30px;
  width: 400px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Avenir Next";
  ${media.tablet`
    position: static;
    width: 100%;
  `}
`;

const Title = styled.h1`
  color: #3a3a3a;
  font-size: 64px;
  ${media.giant`font-size: 36px;`}
`;

const Save = styled.button`
  width: 75px;
  height: 75px;
  background-color: #E4E4E4;
  border: none;
  border-radius: 50%;
  color: #ffffff;
  font-size: 18px;
  text-transform: uppercase;
  ${p => p.color && `background-color: ${p.color};`}
  ${media.tablet`display:none;`}
`;

export default ({ color, title }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Save color={color}>Save</Save>
  </Wrapper>
);
