import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  left:30px;
  width: 200px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Avenir Next";
`;

const Title = styled.h1`
  color: #3a3a3a;
  font-size: 64px;
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
`;

export default ({ color }) => (
  <Wrapper>
    <Title>Ultra boost</Title>
    <Save color={color}>Save</Save>
  </Wrapper>
);
