import React from 'react';
import { Wrapper, Cover, Image, StyledLink, Label } from './styled';
import Price from './Price';

export default ({ img, price, sale, to, currency }) => (
  <Wrapper>
    <Cover>
      <Image src={img} alt="" />
    </Cover>
    <StyledLink to={to} sale={sale}><Price currency={currency}>{price}</Price></StyledLink>
    {
      sale && <Label>Sale</Label>
    }
  </Wrapper>
);
