import React from 'react';
import { Wrapper, Cover, Image, StyledLink, Label } from './styled';

export default ({ img, price, sale, to }) => (
  <Wrapper>
    <Cover>
      <Image src={img} alt="" />
    </Cover>
    <StyledLink to={to} sale={sale}>{price}</StyledLink>
    {
      sale && <Label>Sale</Label>
    }
  </Wrapper>
);
