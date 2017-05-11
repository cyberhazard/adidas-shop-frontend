import React from 'react';
import styled from 'styled-components';
import { Label } from './../List/Card/styled';
import Colors from './Colors';

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`

const StyledLabel = styled(Label)`
  display: inline-block;
  position: static;
  vertical-align: super;
`

const Price = styled.h2`
  position: absolute;
  top: 50px;
  right: 0;
  color: #e2e2e2;
  font-family: "Avenir Next";
  font-size: 80px;
  font-weight: 700;
`


const TopRight = () => (
  <Wrapper>
    <Colors />
    <StyledLabel>Sale</StyledLabel>
    <Price>170$</Price>
  </Wrapper>
)

export default TopRight;
