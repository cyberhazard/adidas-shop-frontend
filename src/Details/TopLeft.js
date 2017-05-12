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
`

const Title = styled.h1`
  color: #3a3a3a;
  font-size: 64px;
`

const Save = styled.button`
  width: 75px;
  height: 75px;
  background-color: #E4E4E4;
  border: none;
  border-radius: 50%;
  color: #ffffff;
  font-size: 18px;
  text-transform: uppercase;
`

export default () => (
  <Wrapper>
    <Title>Ultra boost</Title>
    <Save>Save</Save>
  </Wrapper>
)

