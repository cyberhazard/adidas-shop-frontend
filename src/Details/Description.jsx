import React from 'react';
import styled from 'styled-components';
import media from './../media';

const Wrapper = styled.p`
  font-family: "Avenir Next";
  font-size: 33px;
  font-weight: 500;
  color: #d8d8d8;
  padding: 4px;
  ${media.tablet`font-size:20px`}
`;

export default ({ text }) => (
  <Wrapper>{text}</Wrapper>
);
