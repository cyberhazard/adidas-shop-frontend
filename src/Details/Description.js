import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  font-family: "Avenir Next";
  font-size: 33px;
  font-weight: 500;
  color: #d8d8d8;
  padding: 4px;
`;

const Bold = styled.span`
  color: #6e6e6e;
`;

export default () => (
  <Wrapper>
    <Bold>Adidas</Bold> is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.
  </Wrapper>
);
