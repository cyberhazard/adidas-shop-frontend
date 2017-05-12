import React from 'react';
import { Wrapper, ProductInfo } from './styled';
import BuyButton from './BuyButton';
import TopLeft from './TopLeft';
import TopRight from './TopRight';
import Carousel from './Carousel';
import Description from './Description'

export default () => (
  <Wrapper>
    <ProductInfo>
      <TopLeft />
      <TopRight />
      <Carousel />
      <Description />
    </ProductInfo>
    <BuyButton />
  </Wrapper>
)
