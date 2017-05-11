import React from 'react';
import { Wrapper, Order } from './styled';
import BuyButton from './BuyButton';
import TopLeft from './TopLeft';
import TopRight from './TopRight';
import Previews from './Previews';
import Description from './Description'

const Details = () => (
  <Wrapper>
    <Order>
      <TopLeft />
      <TopRight />
      <Previews />
      <Description />
    </Order>
    <BuyButton />
  </Wrapper>
)

export default Details;
