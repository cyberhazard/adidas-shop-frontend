import React from 'react';
import styled from 'styled-components';
import media from './../media';

const Button = styled.button`
  width: 100%;
  border: none;
  background-image: linear-gradient(to right, #4949aa 0%, #27275d 100%);
  padding: 35px 0;
  color: #ffffff;
  font-family: "Avenir Next";
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  ${media.tablet`
    padding: 22px 0;
    font-size: 20px;
    flex-shrink: 0;
  `}
`;

export default () => (
  <Button>Buy now</Button>
);
