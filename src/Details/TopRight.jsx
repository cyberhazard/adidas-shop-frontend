import React from 'react';
import styled from 'styled-components';
import { Label } from './../List/Card/styled';
import Colors from './Colors';
import media from './../media';

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  ${media.tablet`
    position: static;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  `}
`;

const StyledLabel = styled(Label)`
  display: inline-block;
  position: static;
  vertical-align: super;
`;

const Price = styled.h2`
  position: absolute;
  top: 50px;
  right: 0;
  color: #e2e2e2;
  font-family: "Avenir Next";
  font-size: 80px;
  font-weight: 700;
  ${p => p.color && `color:${p.color};`}
  ${media.tablet`
    position: static;
    order: -1;
    width: 100%;
  `}
`;

export default ({ color, setColor }) => (
  <Wrapper>
    <Colors setColor={setColor} />
    <StyledLabel>Sale</StyledLabel>
    <Price color={color}>170$</Price>
  </Wrapper>
);
