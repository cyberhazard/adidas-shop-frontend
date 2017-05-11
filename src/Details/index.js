import React from 'react';
import { Wrapper, ProductInfo } from './styled';
import BuyButton from './BuyButton';
import TopLeft from './TopLeft';
import TopRight from './TopRight';
import Previews from './Previews';
import Description from './Description'

const Details = () => (
  <Wrapper>
    <ProductInfo>
      <TopLeft />
      <TopRight />
      <Previews />
      <Description />
    </ProductInfo>
    <BuyButton />
  </Wrapper>
)

export default Details;
