import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Cover, Image, StyledLink, Label } from './styled';

const Card = ({ img, price, sale }) => (
  <Wrapper>
    <Cover>
      <Image src={img} alt="" />
    </Cover>
    <StyledLink to="/details" sale={sale}>{price}</StyledLink>
    {
      sale && <Label>Sale</Label>
    }
  </Wrapper>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  sale: PropTypes.bool.isRequired,
};

export default Card;
