import React from 'react';
import { Wrapper, ProductInfo } from './styled';
import BuyButton from './BuyButton';
import TopLeft from './TopLeft';
import TopRight from './TopRight';
import Carousel from './Carousel';
import Description from './Description';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: '' };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <Wrapper>
        <ProductInfo>
          <TopLeft color={this.state.color} />
          <TopRight setColor={this.changeColor} color={this.state.color} />
          <Carousel />
          <Description />
        </ProductInfo>
        <BuyButton />
      </Wrapper>
    );
  }
}
