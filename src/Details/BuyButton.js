import React from 'react';
import styled from 'styled-components';

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
`

const BuyButton = () => (
  <Button>Buy now</Button>
)

export default BuyButton
