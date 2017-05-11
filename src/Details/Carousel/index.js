import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const BigImage = styled.img`
  display: block;
  max-width: 70%;
  max-height: 500px;
  margin: 0 auto;
`

export default () => (
  <div>
    <BigImage src={require('./../../assets/images/big-image.png')} />
    <Wrapper>
      <Item img={require('./../../assets/images/preview-1.png')} />
      <Item img={require('./../../assets/images/preview-2.png')} />
      <Item img={require('./../../assets/images/preview-3.png')} />
      <Item img={require('./../../assets/images/preview-2.png')} isSelected />
      <Item>See more photos</Item>
    </Wrapper>
  </div>
);
