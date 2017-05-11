import React from 'react';
import { Wrapper, Cover, Image, StyledLink, Sale, CustomCol } from './styled';

const Card = ({img, price, sale}) => (
  <CustomCol xs={12} sm={6} md={4} lg={3}>
    <Wrapper>
      <Cover>
        <Image src={img} alt=""/>
      </Cover>
      <StyledLink to="/details" sale={sale}>{price}</StyledLink>
      {
        sale && <Sale>Sale</Sale>
      }
    </Wrapper>
  </CustomCol>
)

export default Card
