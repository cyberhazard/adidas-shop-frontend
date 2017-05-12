import React from 'react';
import { Wrapper, Cover, Image, StyledLink, Label } from './styled';

export default ({img, price, sale}) => (
  <Wrapper>
    <Cover>
      <Image src={img} alt=""/>
    </Cover>
    <StyledLink to="/details" sale={sale}>{price}</StyledLink>
    {
      sale && <Label>Sale</Label>
    }
  </Wrapper>
);
